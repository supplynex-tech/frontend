"use client";

import { UseFormRegisterReturn } from "react-hook-form";
import InputBox from "./inputBox";

interface BaseInputProps {
    label: string;
    register: UseFormRegisterReturn<any>;
    type?: string;
    placeholder?: string;
};

export default function BaseInput({
    label,
    register,
    type = "text",
    placeholder = "",
}: BaseInputProps) {
    return (
        <InputBox label={label} name={register.name}>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full mt-2 border-2 placeholder-gray-400 border-gray-200 px-3 py-2 rounded-lg focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100"
                {...register}
            />
        </InputBox>
    );
}
