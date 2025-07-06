"use client";

import OtpInput from "../base/input/otp";
import { PrimaryActionButton } from "../base/button";
import { Register } from "@/validation/register";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

interface OtpStepProps {
  onSubmit: (data: Register) => void;
  register: UseFormRegister<Register>;
  handleSubmit: UseFormHandleSubmit<Register>
  errors: FieldErrors<Register>
  phoneNumber: string;

};

export default function OtpStep({ onSubmit, register, handleSubmit, errors, phoneNumber }: OtpStepProps) {
  return (
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

      <p className="text-xs font-semibold text-gray-600 text-center mt-4 cursor-pointer hover:text-primary-500">
        ارسال مجدد کد
      </p>

      <PrimaryActionButton
        type="submit"
        title="ارسال کد تأیید"
        className="mt-3"
      />
    </form>
  );
}
