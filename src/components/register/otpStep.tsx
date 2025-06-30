"use client";

import { useState } from "react";
import { HugeButton, RegisterButton, SubmitButton } from "../base/button";
import OtpInput from "../base/input/otp";
import { useRouter } from 'next/navigation';

type Props = {
  phone: string;
};

export default function OtpStep({ phone }: Props) {
  const [otp, setOtp] = useState("");
 const router = useRouter();

  const onSubmit = (id: string) => {
    // اعتبارسنجی یا ارسال به API اینجا انجام بشه
    router.push("/form");
  };

  return (
    <>
      <p className="text-center text-emerald-500">
        کد تایید به شماره موبایل <span className="font-semibold">{phone}</span> ارسال شد.
      </p>
      <p className="text-center text-gray-600 mb-4">کد تایید پیامک شده را وارد کنید</p>
      <OtpInput label="کد تایید" name="otp" />
      <p className="text-xs font-semibold text-gray-600 text-center mt-4 cursor-pointer hover:text-primary-500">
        ارسال مجدد کد
      </p>

      <div className="mt-15 w-[50%] flex self-center">
        <RegisterButton title="ارسال کد تأیید" onClick={() => onSubmit(phone)} />
      </div>
    </>
  );
}
