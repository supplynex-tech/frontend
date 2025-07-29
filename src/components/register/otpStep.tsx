"use client";

import OtpInput from "../base/input/otp";
import {PrimaryActionButton} from "../base/button";
import {Register} from "@/validation/register";
import {FieldErrors, UseFormHandleSubmit, UseFormRegister} from "react-hook-form";
import {sendOTP} from "@/services/api/register";
import {useEffect, useState} from "react";

interface OtpStepProps {
    onSubmit: (data: Register) => void;
    register: UseFormRegister<Register>;
    handleSubmit: UseFormHandleSubmit<Register>
    errors: FieldErrors<Register>
    phoneNumber: string;

};

export default function OtpStep({onSubmit, register, handleSubmit, errors, phoneNumber}: OtpStepProps) {
    const [counter, setCounter] = useState(120);

    useEffect(() => {
        if (counter <= 0) return;

        const interval = setInterval(() => {
            setCounter((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [counter]);

    const resendOTP =  async () => {
        const initialRegister: Register = {
            phoneNumber: phoneNumber,
        };
        await sendOTP(initialRegister);
        setCounter(120);
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="text-emerald-500">
                    کد تایید به شماره موبایل{" "}
                    <span className="font-semibold">{phoneNumber}</span> ارسال شد.
                </p>

                <OtpInput
                    label="کد تایید"
                    register={register("otp")}
                />

                {errors.otp && (
                    <p className="text-danger text-sm mt-2">{errors.otp.message}</p>
                )}


                <div className="flex justify-center">
                    <PrimaryActionButton
                        type="submit"
                        title="ارسال کد تأیید"
                        className="mt-3"
                    />
                </div>
            </form>
            {counter > 0 ? (
                <p className="text-xs font-semibold text-gray-600 text-center mt-4">
                    ارسال مجدد کد تا {counter} ثانیه دیگر
                </p>
            ) : (
                <button
                    className="text-xs font-semibold text-gray-600 text-center mt-4 cursor-pointer hover:text-primary-500"
                    onClick={resendOTP}
                >
                    ارسال مجدد کد
                </button>
            )}
        </>
    )
        ;
}
