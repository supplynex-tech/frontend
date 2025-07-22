"use client";

import { ReactNode } from "react";

interface InputBoxProps {
    label: string;
    name: string;
    children: ReactNode
}

export default function InputBox({ label, name, children }: InputBoxProps) {
    return (
        <div className="pt-6">
            <label htmlFor={name} className="block text-md font-medium text-gray-600 mb-2">
                {label}
            </label>
            {children}
        </div>
    );
}
