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
        <div className="flex flex-col gap-3 sm:gap-5 pt-3">
            <h2 className="font-bold text-xl">احراز هویت</h2>
            {
                step === "phone" ? (
                    <PhoneStep onSubmit={handlePhoneSubmit} />
                ) : (
                    <OtpStep phone={phone} />
                )
            }
        </div>
    );
}