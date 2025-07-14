"use client";

import BaseInput from "../base/input/input";
import { PrimaryActionButton } from "../base/button";
import { Register } from "@/validation/register";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

interface PhoneStepProps {
    onSubmit: (data: Register) => void;
    register: UseFormRegister<Register>;
    handleSubmit: UseFormHandleSubmit<Register>
    errors: FieldErrors<Register>
};

export default function PhoneStep({ onSubmit, register, handleSubmit, errors }: PhoneStepProps) {

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-gray-600">شماره همراه خود را وارد کنید.</p>

            <BaseInput
                label="شماره همراه"
                type="tel"
                placeholder="9121234567"
                register={register("phoneNumber")}
            />

            {errors.phoneNumber && (
                <p className="text-danger text-sm mt-2">{errors.phoneNumber.message}</p>
            )}

            <div className="flex justify-center">
                <PrimaryActionButton
                    type="submit"
                    title="تأیید"
                    className="px-10 mt-3"
                />
            </div>

        </form>
    );
}
