"use client";

import { useState } from "react";

export default function Select() {
    const options = ["United States", "Canada", "France", "Germany"];
    const [selected, setSelected] = useState(options[0]);
    const [open, setOpen] = useState(false);

    return (
        <div className="pt-6 w-full max-w-full">
            <label className="block text-md font-medium text-gray-600 mb-2">انتخاب کن</label>

            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className={`w-full flex justify-between items-center border-2 px-3 py-2.5 rounded-lg text-sm text-gray-600 transition ${open
                        ? "border-primary-100 ring-1 ring-primary-100"
                        : "border-gray-200 hover:border-gray-200"
                        }`}
                >
                    {selected}
                    <svg
                        className={`w-4 h-4 transition-transform ${open ? "rotate-180" : "rotate-0"
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {open && (
                    <ul className="absolute z-10 mt-2 w-full bg-gray-50 border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {options.map((option) => (
                            <li
                                key={option}
                                className={`px-4 py-2 text-sm cursor-pointer hover:bg-primary-50 ${selected === option ? "bg-primary-100" : ""
                                    }`}
                                onClick={() => {
                                    setSelected(option);
                                    setOpen(false);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
