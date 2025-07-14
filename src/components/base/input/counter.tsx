"use client";

import { useState, useEffect } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CounterProps {
    label: string;
    register: UseFormRegisterReturn<any>;
    min?: number;
}

export default function Counter({ label, register, min = 1 }: CounterProps) {
    const [value, setValue] = useState(min);

    const increase = () => {
        setValue((prev) => prev + 1);
    };

    const decrease = () => {
        if (value > min) setValue((prev) => prev - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const num = parseInt(e.target.value);
        if (!isNaN(num) && num >= min) {
            setValue(num);
        }
    };

    useEffect(() => {
        register.onChange({
            target: { value, name: register.name },
        });
    }, [value, register]);

    return (
        <div className="pt-6">
            <label htmlFor={register.name} className="block text-md font-medium text-gray-600 mb-2">
                {label}
            </label>

            <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden w-[150px]">
                <button
                    type="button"
                    onClick={decrease}
                    className="px-3 py-2 text-primary-500 hover:bg-gray-100 cursor-pointer disabled:text-gray-300 disabled:cursor-not-allowed"
                    disabled={value <= min}
                >
                    −
                </button>
                <input
                    type="number"
                    {...register}
                    value={value}
                    onChange={handleChange}
                    className="w-full text-center border-0 focus:ring-0 focus:outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                    type="button"
                    onClick={increase}
                    className="px-3 py-2 text-primary-500 hover:bg-gray-100 cursor-pointer disabled:text-gray-300 disabled:cursor-not-allowed"
                >
                    +
                </button>
            </div>
        </div>
    );
}
