"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneStep from "../register/phoneStep";
import OtpStep from "../register/otpStep";
import { Register, RegisterSchema } from "@/validation/register";
import { sendOTP, verifyPhoneNumber } from "@/services/api/register";
import { useRouter } from 'next/navigation';
import { storage } from "@/services/localstorage";

export default function RegisterView() {
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const router = useRouter();


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<Register>({
        resolver: zodResolver(RegisterSchema),
    });

    const handlePhoneSubmit = (async (data: Register) => {
        try {
            await sendOTP(data)
            setStep("otp");
        } catch (err) { }
    });

    const handleOTPSubmit = (async (data: Register) => {
        try {
            let result = await verifyPhoneNumber(data)
            storage.setItem("accessToken", result.access)
            storage.setItem("refreshToken", result.refresh)
            storage.setItem("phone_number", result.phoneNumber)

            router.push("/dashboard")
        } catch (err) { }
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