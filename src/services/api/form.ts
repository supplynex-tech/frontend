import {callApiWithToast} from "@/services/api/base";
import {FormValidation} from "@/validation/form";

export const sendForm = async (userFormId: number, data: FormValidation): Promise<void> => {
    const formData = new FormData();
    let index = 0;

    for (const [form_question_id, answer] of Object.entries(data)) {
        if (answer instanceof FileList) {
            formData.append(`answers[${index}][form_question]`, form_question_id);
            formData.append(`answers[${index}][user_form]`, userFormId.toString());
            formData.append(`answers[${index}][image]`, answer[0]);
        } else {
            formData.append(`answers[${index}][form_question]`, form_question_id);
            formData.append(`answers[${index}][user_form]`, userFormId.toString());
            formData.append(`answers[${index}][answer]`, answer);
        }
        index++;
    }

    console.log(formData);

    try {
        await callApiWithToast({
            url: "form-generator/answer/",
            method: "POST",
            successActionText: "با موفقیت ثبت شد",
            failedActionText: "خطا در برقراری ارتباط با سرور",
            badActionText: "فیلد های وارد شده اشتباه می باشد",
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }, {
            body: formData

        })
    } catch (err) {
        throw err
    }
}