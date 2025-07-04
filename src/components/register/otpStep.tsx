"use client";

import OtpInput from "../base/input/otp";
import { useRouter } from 'next/navigation';
import { PrimaryActionButton } from "../base/button";

type Props = {
  phone: string;
};

export default function OtpStep({ phone }: Props) {
  const router = useRouter();

  const onSubmit = () => {
    // اعتبارسنجی یا ارسال به API اینجا انجام بشه
    router.push("/form");
  };

  return (
    <>
      <p className="text-emerald-500">
        کد تایید به شماره موبایل <span className="font-semibold">{phone}</span> ارسال شد.
      </p>
      <p className="text-gray-600 mb-4">کد تایید پیامک شده را وارد کنید</p>
      <OtpInput label="کد تایید" name="otp" />
      <p className="text-xs font-semibold text-gray-600 text-center mt-4 cursor-pointer hover:text-primary-500">
        ارسال مجدد کد
      </p>
      <PrimaryActionButton type="submit" title="ارسال کد تأیید" onClick={() => onSubmit(phone)} />
    </>
  );
}
