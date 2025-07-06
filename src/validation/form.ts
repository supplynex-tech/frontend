import { z } from "zod";
import { FormQuestion } from "@/types/api";

const baseInputValidation = z.string().max(50);
const UploadFileValidation = z
    .any()
    .refine(
        (fileList) => {
            if (!fileList || fileList.length === 0) return true; // optional → valid
            return fileList[0].size <= 5 * 1024 * 1024;
        },
        { message: "فایل حداکثر ۵ مگابایت" }
    );
const SelectValidation = z.string().max(50);
const DatePickerValidation = z.string().max(50);
const RadioValidation = z.array(z.string().max(50));
const CounterValidation = z.number();
const TextareaValidation = z.string().max(250);

export const FormValidationGeneratorSchema = (
    questions: FormQuestion[]
): z.ZodObject<Record<string, z.ZodTypeAny>> => {
    const obj: Record<string, z.ZodTypeAny> = {};

    questions.forEach((question) => {
        let validation: z.ZodTypeAny;

        switch (question.type) {
            case "TEXT_INPUT":
                validation = baseInputValidation;
                break;
            case "UPLOAD_FILE":
                validation = UploadFileValidation;
                break;
            case "SELECT":
                validation = SelectValidation;
                break;
            case "DATE_PICKER":
                validation = DatePickerValidation;
                break;
            case "RADIO":
                validation = RadioValidation;
                break;
            case "COUNTER":
                validation = CounterValidation;
                if (question.options && "max" in question.options) {
                    validation = validation.max(question.options.max || 100);
                }
                break;
            case "TEXTAREA":
                validation = TextareaValidation;
                break;
            default:
                validation = z.any(); // fallback
        }

        obj[question.id] = question.is_required ? validation : validation.optional();
    });

    return z.object(obj);
};

export type FormValidation = z.infer<ReturnType<typeof FormValidationGeneratorSchema>>;
