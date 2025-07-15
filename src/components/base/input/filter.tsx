"use client";

import React from "react";

interface SelectProps {
    options?: string[];
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    name?: string;
    className?: string;
}

export default function Filter({
    options,
    value,
    onChange,
    label,
    name,
    className = "",
}: SelectProps) {
    return (
        <div className="flex gap-1 items-center">
            {label && <label className="text-sm text-gray-700">{label}</label>}
            <select
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`border rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring focus:ring-primary-200 ${className}`}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
