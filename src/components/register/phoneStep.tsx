"use client";

import { useState } from "react";
import BaseInput from "../base/input/input";
import { HugeButton, RegisterButton, SubmitButton } from "../base/button";

type Props = {
    onSubmit: (phone: string) => void;
};

export default function PhoneStep({ onSubmit }: Props) {
    const [phone, setPhone] = useState("");

    const handleSubmit = () => {
        const isValidPhone = /^09\d{9}$/.test(phone);
        if (!isValidPhone) {
            alert("شماره تماس معتبر وارد کنید");
            return;
        }

        onSubmit(phone); // تغییر مرحله در RegisterPage انجام می‌گیرد
    };

    return (
        <>
            <p className="text-center text-gray-600">
                شماره همراه خود را وارد کنید.
            </p>
            <BaseInput
                label="شماره همراه"
                name="phone"
                type="tel"
                placeholder="09121234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <div className="mt-15 w-[50%] flex self-center">
                <RegisterButton title="تأیید" onClick={handleSubmit} />
            </div>
        </>
    );
}
