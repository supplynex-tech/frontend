'use client'

import { useRef, useState } from "react";

export default function FileUpload() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState("محل بارگذاری فایل من ...");

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : "محل بارگذاری فایل من ...");
    };

    return (
        <div className="pt-6">
            <label htmlFor="file_input" className="block text-md font-medium text-gray-600 mb-2">
                آپلود فایل
            </label>

            <div
                className="w-full border-2 border-gray-200 px-4 py-2 rounded-lg cursor-pointer transition"
                onClick={handleClick}
            >
                <span className="text-gray-600 text-sm">{fileName}</span>
            </div>

            <input
                id="file_input"
                ref={inputRef}
                type="file"
                onChange={handleChange}
                className="hidden"
            />
        </div>
    );
}
