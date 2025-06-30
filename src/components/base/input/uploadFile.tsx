"use client";

import { useState } from "react";
import InputBox from "./inputBox";

type UploadFileProps = {
    name: string;
    label: string;
    required?: boolean;
};

export default function UploadFile({ name, label, required }: UploadFileProps) {
    const [fileName, setFileName] = useState("فایلی انتخاب نشده");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setFileName(file.name);
    };

    return (
        <InputBox label={label} name={name}>
            <label
                htmlFor={name}
                className="w-full mt-2 border-2 border-gray-200 px-3 py-2 rounded-lg text-gray-400 cursor-pointer focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100 flex items-center justify-between"
            >
                <span className={fileName === "فایلی انتخاب نشده" ? "text-gray-400" : "text-black"}>
                    {fileName}
                </span>
            </label>

            <input
                id={name}
                name={name}
                type="file"
                required={required}
                className="hidden"
                onChange={handleFileChange}
            />
        </InputBox>
    );
}
