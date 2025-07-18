"use client";

import { useState, useEffect } from "react";
import InputBox from "../base/input/inputBox";
import { UseFormRegisterReturn } from "react-hook-form";

interface ImageRadioProps {
  label: string;
  register: UseFormRegisterReturn<any>;
  multi?: boolean;
  options: string[]; // مثل Radio
  basePath?: string; // مسیر پیش‌فرض عکس‌ها
  defaultExt?: string; // پسوند پیش‌فرض اگر وجود نداشت
}

export default function ImageRadio({
  label,
  register,
  multi = true,
  options,
  basePath = "/assets/images",
  defaultExt = "jpg",
}: ImageRadioProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [preview, setPreview] = useState<string | null>(null);

  // همگام‌سازی با react-hook-form
  useEffect(() => {
    if (multi) {
      register.onChange({
        target: { value: selected, name: register.name },
      });
    } else if (selected.length > 0) {
      register.onChange({
        target: { value: selected[0], name: register.name },
      });
    }
  }, [selected, multi, register]);

  const toggle = (value: string) => {
    if (multi) {
      setSelected((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    } else {
      setSelected([value]);
    }
  };

  // ساخت مسیر تصویر
  const getSrc = (val: string) => {
    const hasExt = /\.[a-z0-9]+$/i.test(val);
    return `${basePath}/${val}${hasExt ? "" : `.${defaultExt}`}`;
  };

  return (
    <>
      <InputBox label={label} name={register.name}>
        {/* Hidden input for RHF */}
        <input
          type="hidden"
          {...register}
          value={multi ? JSON.stringify(selected) : selected[0] || ""}
          readOnly
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-3">
          {options.map((opt) => {
            const isChecked = selected.includes(opt);
            const src = getSrc(opt);

            return (
              <label
                key={opt}
                className={`border rounded-lg p-4 cursor-pointer flex flex-col items-center gap-2 transition ${
                  isChecked ? "border-primary-500 bg-primary-50" : "border-gray-300"
                }`}
              >
                <input
                  type={multi ? "checkbox" : "radio"}
                  className="peer hidden"
                  name={register.name}
                  value={opt}
                  checked={isChecked}
                  onChange={() => toggle(opt)}
                />

                <img
                  src={src}
                  alt={opt}
                  className="w-24 h-24 object-cover rounded-md shadow-sm hover:scale-105 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreview(src);
                  }}
                />

                <span className="text-sm text-center">{opt}</span>
              </label>
            );
          })}
        </div>
      </InputBox>

      {/* تصویر بزرگ در modal */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={() => setPreview(null)}
        >
          <img
            src={preview}
            alt="Preview"
            className="max-w-3xl max-h-[80vh] rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
