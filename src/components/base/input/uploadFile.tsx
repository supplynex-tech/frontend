"use client";

import { useState } from "react";
import InputBox from "./inputBox";
import { UseFormRegisterReturn } from "react-hook-form";

type UploadFileProps = {
    register: UseFormRegisterReturn<any>;
    label: string;
    placeholder?: string;
    required?: boolean;
};

export default function UploadFile({ register, label, required, placeholder }: UploadFileProps) {
    const [fileName, setFileName] = useState(placeholder || "فایلی انتخاب نشده");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setFileName(file.name);
    };

    return (
        <InputBox label={label} name={register.name}>
            <label
                htmlFor={register.name}
                className="w-full mt-2 border-2 border-gray-200 px-3 py-2 rounded-lg text-gray-400 cursor-pointer focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100 flex items-center justify-between"
            >
                <span className={fileName === (placeholder || "فایلی انتخاب نشده") ? "text-gray-400" : "text-black"}>
                    {fileName}
                </span>
            </label>

            <input
                type="file"
                id={register.name}
                name={register.name}
                required={required}
                className="hidden"
                ref={register.ref}
                onChange={(e) => {
                    handleFileChange(e);
                    register.onChange(e);
                }}
            />
        </InputBox>
    );
}
