"use client";

import { useState } from "react";
import PhoneStep from "../register/phoneStep";
import OtpStep from "../register/otpStep";

export default function RegisterView() {
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [phone, setPhone] = useState("");

    const handlePhoneSubmit = (enteredPhone: string) => {
        setPhone(enteredPhone);
        setStep("otp");
    };

    return (
        <>
            <h2 className="font-bold text-2xl self-center mb-6">ثبت نام</h2>
            {
                step === "phone" ? (
                    <PhoneStep onSubmit={handlePhoneSubmit} />
                ) : (
                    <OtpStep phone={phone} />
                )
            }
        </>
    );
}