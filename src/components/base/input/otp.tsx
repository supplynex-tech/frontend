"use client";

import { useEffect, useRef, useState } from "react";
import InputBox from "./inputBox";

type Props = {
    length?: number;
    label: string
    name: string
};

export default function OtpInput({ length = 6, label, name }: Props) {
    const [values, setValues] = useState<string[]>(Array(length).fill(""));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        const onlyNumber = value.replace(/[^\d۰-۹]/g, ""); // فقط عدد

        if (onlyNumber === "") return;

        const newValues = [...values];
        newValues[index] = onlyNumber.slice(-1); // فقط یک رقم

        // پاک کردن خانه‌های بعدی
        for (let i = index + 1; i < length; i++) {
            newValues[i] = "";
        }

        setValues(newValues);

        // فوکوس به خانه بعدی
        if (index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            const newValues = [...values];
            newValues[index] = "";

            // پاک کردن خانه‌های بعدی
            for (let i = index + 1; i < length; i++) {
                newValues[i] = "";
            }

            setValues(newValues);

            if (index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        }
    };

    useEffect(() => {
        // فوکوس به اولین خانه در بارگذاری
        inputsRef.current[0]?.focus();
    }, []);

    return (
        <InputBox label={label} name={name}>
            <div className="flex flex-row-reverse gap-2 justify-center pt-5">
                {values.map((value, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputsRef.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="otp-small w-10 h-10 text-center text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-3 focus:border-primary-100"
                        dir="rtl"
                    />
                ))}
            </div>
        </InputBox>
    );
}
