"use client";

import { useState, useEffect } from "react";
import InputBox from "./inputBox";
import { UseFormRegisterReturn } from "react-hook-form";

interface ImageRadioProps {
  label: string;
  register: UseFormRegisterReturn<any>;
  options: string[]; // مثل Radio
}

export default function ImageRadio({
  label,
  register,
  options,
}: ImageRadioProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    console.log(selected)
    console.log(register)
    if (selected.length > 0) {
      register.onChange({
        target: { value: selected, name: register.name },
      });
    }
  }, [selected]);

  const toggle = (value: string) => {
      setSelected([value]);
  };

  return (  
    <>
      <InputBox label={label} name={register.name}>
        {/* Hidden input for RHF */}
        <input
          type="hidden"
          {...register}
          value={selected[0] || ""}
          readOnly
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-3">
          {options.map((opt) => {
            const isChecked = selected.includes(opt);

            return (
              <label
                key={opt}
                className={`border rounded-lg p-4 cursor-pointer flex flex-col items-center gap-2 transition ${isChecked ? "border-primary-500 bg-primary-50" : "border-gray-300"
                  }`}
              >
                <input
                  type={"radio"}
                  className="peer hidden"
                  name={register.name}
                  value={opt}
                  checked={isChecked}
                  onChange={() => toggle(opt)}
                />

                <img
                  src={opt}
                  alt={opt}
                  className="w-24 h-24 object-cover rounded-md shadow-sm hover:scale-105 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreview(opt);
                  }}
                />

              </label>
            );
          })}
        </div>
      </InputBox>

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
