"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneStep from "../register/phoneStep";
import OtpStep from "../register/otpStep";
import { Register, RegisterSchema } from "@/validation/register";
import { sendOTP, verifyPhoneNumber } from "@/services/api/register";
import { storage } from "../../services/storage";

export default function RegisterView({closeAction}: { closeAction: () => void }) {
    const [step, setStep] = useState<"phone" | "otp">("phone");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Register>({
        resolver: zodResolver(RegisterSchema),
    });

    const handlePhoneSubmit = (async (data: Register) => {
        try {
            await sendOTP(data)
            setStep("otp");
        } catch { }
    });

    const handleOTPSubmit = (async (data: Register) => {
        try {
            const result = await verifyPhoneNumber(data)
            storage.setItem("accessToken", result.access)
            storage.setItem("refreshToken", result.refresh)
            storage.setItem("phone_number", result.phoneNumber)
            closeAction()
        } catch { }
    });

    return (
        <div className="flex flex-col gap-3 sm:w-[350px] sm:gap-5 pt-3 relative">
            <h2 className="font-bold text-xl">احراز هویت</h2>
            {
                step === "phone" ? (
                    <PhoneStep onSubmit={handlePhoneSubmit} register={register} handleSubmit={handleSubmit} errors={errors} />
                ) : (
                    <OtpStep onSubmit={handleOTPSubmit} register={register} handleSubmit={handleSubmit} errors={errors} phoneNumber={watch("phoneNumber")}
                    />
                )
            }
        </div>
    );
}