"use client";

import { useState, useEffect, useRef } from "react";

export default function TimeFormFilter() {
    const [selected, setSelected] = useState("همه");
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const timeOptions = ["همه", "امروز", "ماه جاری", "سال جاری"];
    

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
            <div className="flex gap-5 items-center">
                <label className="text-sm text-gray-700">فیلتر بر اساس زمان :</label>
                <input
                    type="hidden"
                    value={selected}
                    readOnly
                />

                <div ref={wrapperRef} className="relative w-[120px]">
                    <button
                        onClick={() => setOpen(!open)}
                        type="button"
                        className={`w-full flex justify-between items-center border-2 px-3 py-2.5 rounded-lg text-sm transition ${open ? "border-primary-100 ring-1 ring-primary-100" : "border-gray-200 hover:border-gray-200"
                            }`}
                    >
                        <span className={`flex-1 truncate text-right ${selected ? "text-gray-700" : "text-gray-400"}`}>
                            {selected}
                        </span>
                        <svg
                            className={`w-4 h-4 shrink-0 ms-2 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {open && (
                        <ul className="absolute z-10 mt-2 w-full bg-gray-50 border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {timeOptions.map((option) => (
                                <li
                                    key={option}
                                    className={`px-4 py-2 text-sm cursor-pointer truncate hover:bg-primary-50 ${selected === option ? "bg-primary-100" : ""
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

