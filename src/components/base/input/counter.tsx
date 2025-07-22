"use client";

import { Control, Controller } from "react-hook-form";

interface CounterProps {
    label: string;
    name: string;
    control: Control<any>;
    min?: number;
}

export default function Counter({
    label,
    name,
    control,
    min = 1,
}: CounterProps) {
    return (
        <div className="pt-8">
            <label className="block text-md font-medium text-gray-600 mb-2">
                {label}
            </label>

            <Controller
                control={control}
                name={name}
                defaultValue={min}
                rules={{ min }}
                render={({ field: { value, onChange } }) => (
                    <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden w-[150px]">
                        <button
                            type="button"
                            onClick={() => onChange(value - 1)}
                            disabled={value <= min}
                            className="px-3 py-2 text-primary-500 hover:bg-gray-100 disabled:text-gray-300"
                        >
                            −
                        </button>

                        <input
                            type="number"
                            value={value}
                            onChange={(e) => onChange(+e.target.value)}
                            className="w-full text-center border-0 focus:ring-0"
                        />

                        <button
                            type="button"
                            onClick={() => onChange(value + 1)}
                            className="px-3 py-2 text-primary-500 hover:bg-gray-100"
                        >
                            +
                        </button>
                    </div>
                )}
            />
        </div>
    );
}
