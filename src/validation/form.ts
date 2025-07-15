import { z } from "zod";
import { FormQuestion } from "@/types/api";

const baseInputValidation = z.string().max(50);
const uploadFileValidation = z
    .any()
    .refine(
        (fileList) => {
            if (!fileList || fileList.length === 0) return true; // optional → valid
            return fileList[0].size <= 5 * 1024 * 1024;
        },
        { message: "فایل حداکثر ۵ مگابایت می‌تواند باشد" }
    );
const selectValidation = z.string().max(50);
const datePickerValidation = z.string().max(50);
const radioValidation = z.array(z.string().max(50));
const counterValidation = z.number();
const textareaValidation = z.string().max(250);

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
                validation = uploadFileValidation;
                break;
            case "SELECT":
                validation = selectValidation;
                break;
            case "DATE_PICKER":
                validation = datePickerValidation;
                break;
            case "RADIO":
                validation = radioValidation;
                break;
            case "COUNTER":
                validation = counterValidation;
                break;
            case "TEXTAREA":
                validation = textareaValidation;
                break;
            default:
                validation = z.any(); // fallback برای موارد ناشناخته
        }

        // ✅ تبدیل id به string چون کلیدهای Zod object باید string باشن
        obj[question.id.toString()] = question.is_required
            ? validation
            : validation.optional();
    });

    return z.object(obj);
};

export type FormValidation = z.infer<ReturnType<typeof FormValidationGeneratorSchema>>;
