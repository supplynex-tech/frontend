import {Register} from "@/validation/register";
import {callApiWithToast} from "@/services/api/base";
import {FormValidation} from "@/validation/form";

export const sendForm = async (userFormId: number, data: FormValidation): Promise<void> => {
    try {
        await callApiWithToast({
            url: "form-generator/answer/",
            method: "POST",
            successActionText: "با موفقیت ثبت شد",
            failedActionText: "خطا در برقراری ارتباط با سرور",
            badActionText: "فیلد های وارد شده اشتباه می باشد"
        }, {
            body: Object.entries(data).map(([form_question_id, answer]: [number, any]) => ({
                form_question: +form_question_id,
                answer: answer,
                user_form: userFormId
            }))

        })
    } catch (err) {
        throw err
    }
}