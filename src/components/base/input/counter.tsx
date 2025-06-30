"use client";

import { useState } from "react";

type CounterProps = {
    label: string;
    name: string;
    max: number;
};

export default function Counter({ label, name, max }: CounterProps) {
    const [value, setValue] = useState(0);

    const increase = () => {
        if (value < max) setValue((prev) => prev + 1);
    };

    const decrease = () => {
        if (value > 0) setValue((prev) => prev - 1);
    };

    return (
        <div className="pt-6">
            <label htmlFor={name} className="block text-md font-medium text-gray-600 mb-2">
                {label}
            </label>

            <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden w-[150px]">
                <button
                    type="button"
                    onClick={decrease}
                    className="px-3 py-2 text-primary-500 hover:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
                    disabled={value <= 0}
                >
                    −
                </button>
                <span className="flex-1 text-center text-gray-700">{value}</span>
                <button
                    type="button"
                    onClick={increase}
                    className="px-3 py-2 text-primary-500 hover:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
                    disabled={value >= max}
                >
                    +
                </button>
            </div>
        </div>
    );
}
