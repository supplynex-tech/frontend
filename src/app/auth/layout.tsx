import PrimaryButton from "@/components/button/primary";
import EmailInput from "@/components/form/email";
import PasswordInput from "@/components/form/password";
import Radio from "@/components/form/radio";
import RePasswordInput from "@/components/form/rePassword";
import Link from "next/link";

export default function AuthLayout() {
    return (
        <div className="flex justify-center h-full ">
            <div className="flex flex-col bg-gray-50 shadow-md rounded-xl px-6 pt-12 pb-12 w-[400]">
                <h2 className="font-bold text-2xl self-center">ثبت نام</h2>
                <EmailInput />
                <PasswordInput />
                <RePasswordInput />
                <div className="flex self-center pt-2" >
                    <PrimaryButton />
                </div>
                <div className="flex self-center pt-2" >
                    <span>قبلا ثبت نام کرده اید؟&nbsp;</span>
                    <Link className="text-secondary-500" href="/login">ورود</Link>
                </div>
            </div>
        </div>
    );
}
