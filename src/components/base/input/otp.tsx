"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import InputBox from "./inputBox";
import { UseFormRegisterReturn } from "react-hook-form";

interface OtpInputProps {
  length?: number;
  label: string;
  register: UseFormRegisterReturn<any>;
}

export default function OtpInput({ length = 6, label, register }: OtpInputProps) {
  const [values, setValues] = useState<string[]>(() => Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const focus = useCallback((i: number) => inputsRef.current[i]?.focus(), []);
  const focusNext = useCallback((i: number) => i < length - 1 && focus(i + 1), [focus, length]);
  const focusPrev = useCallback((i: number) => i > 0 && focus(i - 1), [focus]);
  const isDigit = (c: string) => /^[0-9۰-۹]$/.test(c);

  const handleChange = (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const char = e.target.value.slice(-1);
    if (!isDigit(char)) return;
    setValues((prev) => {
      const next = [...prev];
      next[i] = char;
      return next;
    });
    focusNext(i);
  };

  const handleKeyDown = (i: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Backspace") return;
    setValues((prev) => {
      const next = [...prev];
      next[i] = "";
      return next;
    });
    focusPrev(i);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/[^\d۰-۹]/g, "").slice(0, length);
    if (!pasted) return;
    const next = [...pasted.split(""), ...Array(length).fill("")] as string[];
    setValues(next.slice(0, length));
    focus(Math.min(pasted.length, length - 1));
  };

  const combined = values.join("");
  useEffect(() => {
    register.onChange?.({ target: { value: combined, name: register.name } } as any);
  }, [combined , register]);

  useEffect(() => {
    focus(0);
  }, [focus]);

  return (
    <InputBox label={label} name={register.name}>
      <input type="hidden" value={combined} {...register} />

      <div className="flex flex-row-reverse gap-2 justify-center pt-5">
        {values.map((value, i) => (
          <input
            key={i}
            ref={(el) => (inputsRef.current[i] = el)}
            dir="rtl"
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value}
            onChange={handleChange(i)}
            onKeyDown={handleKeyDown(i)}
            onPaste={handlePaste}
            className="otp-small w-10 h-10 text-center text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-3 focus:border-primary-100"
          />
        ))}
      </div>
    </InputBox>
  );
}
