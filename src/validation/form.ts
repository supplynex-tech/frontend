import { z } from "zod";
import { FormQuestion } from "@/types/api";

const emptyToUndef = (v: unknown) =>
    v === "" || v === null || (v instanceof FileList && v.length === 0)
        ? undefined
        : v;

const makeZString = (required: boolean) =>
    z.preprocess(
        emptyToUndef,
        required
            ? z
                .string({ required_error: "این فیلد الزامی است" })
                .nonempty("این فیلد نباید خالی باشد")
                .max(50, "حداکثر ۵۰ کاراکتر مجاز است")
            : z.string().max(50, "حداکثر ۵۰ کاراکتر مجاز است").optional()
    );

const makeZFile = (required: boolean) =>
    z.preprocess(
        emptyToUndef,
        required
            ? z
                .any()
                .refine(
                    (fileList) =>
                        fileList &&
                        fileList instanceof FileList &&
                        fileList.length > 0 &&
                        fileList[0].size <= 5 * 1024 * 1024,
                    { message: "فایل الزامی و حداکثر ۵ مگابایت است" }
                )
            : z
                .any()
                .refine(
                    (fileList) =>
                        !fileList ||
                        (fileList instanceof FileList &&
                            (fileList.length === 0 ||
                                fileList[0].size <= 5 * 1024 * 1024)),
                    { message: "حداکثر اندازه فایل ۵ مگابایت است" }
                )
                .optional()
    );

const makeZRadio = (required: boolean) =>
    z.preprocess(
        emptyToUndef,
        required
            ? z
                .array(z.string().max(50))
                .min(1, "حداقل یک گزینه انتخاب کنید")
                .refine((arr) => arr.length > 0, { message: "انتخاب الزامی است" })
                .or(
                    z
                        .any({ required_error: "انتخاب الزامی است" })
                        .transform(() => [])
                )
            : z.array(z.string().max(50)).optional()
    );

const makeZImageRadio = (required: boolean) =>
    z.preprocess(
        emptyToUndef,
        required
            ? z
                .array(z.string().max(250))
                .min(1, "حداقل یک گزینه انتخاب کنید")
                .refine((arr) => arr.length > 0, { message: "انتخاب الزامی است" })
                .or(
                    z
                        .any({ required_error: "انتخاب الزامی است" })
                        .transform(() => [])
                )
            : z.array(z.string().max(250)).optional()
    );

const makeZNumber = (required: boolean) =>
    z.preprocess(
        emptyToUndef,
        required
            ? z
                .number({
                    required_error: "عدد الزامی است",
                    invalid_type_error: "لطفاً یک عدد معتبر وارد کنید",
                })
                .min(1, "عدد باید حداقل ۱ باشد")
            : z.number().optional()
    );

export const FormValidationGeneratorSchema = (
    questions: FormQuestion[]
): z.ZodObject<Record<string, z.ZodTypeAny>> => {
    const obj: Record<string, z.ZodTypeAny> = {};

    questions.forEach((q) => {
        const key = q.id.toString();
        const required = q.is_required;

        switch (q.type) {
            case "TEXT_INPUT":
            case "SELECT":
            case "DATE_PICKER":
            case "TEXTAREA":
                obj[key] = makeZString(required);
                break;

            case "UPLOAD_FILE":
                obj[key] = makeZFile(required);
                break;

            case "RADIO":
                obj[key] = makeZRadio(required);
                break;

            case "MULTI_SELECT_IMAGE":
                obj[key] = makeZImageRadio(required);
                break;

            case "COUNTER":
                obj[key] = makeZNumber(required);
                break;

            default:
                obj[key] = z.any();
        }
    });

    return z.object(obj);
};

export type FormValidation = z.infer<
    ReturnType<typeof FormValidationGeneratorSchema>
>;
