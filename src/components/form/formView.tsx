import { SubmitButton } from "../base/button";
import BaseInput from "../base/input";
import Textarea from "../base/textarea";

export default function FormView() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                {/* <EmailInput /> // done
                <Count /> //done
                <DateInput />
                <Select />
                <Radio />
                <TextArea />
                <FileUpload /> */}
                <BaseInput label="ایمیل" name="email" type="email" placeholder="example@email.com" required />
                <BaseInput label="رمز عبور" name="password" type="password" placeholder="******" required />
                <BaseInput label="تکرار رمز عبور" name="repeatPassword" type="password" placeholder="******" required />
                <BaseInput label="شماره تماس" name="phone" type="tel" placeholder="09121234567" />
                <BaseInput label="عنوان کوتاه" name="title" placeholder="درخواست همکاری" />
                <Textarea label="توضیحات" name="description" placeholder="لطفاً توضیح دهید..." />

            </div>
            <div className="w-full flex justify-center">
                <SubmitButton title="ثبت" href="/" />
            </div>
        </>
    )
}