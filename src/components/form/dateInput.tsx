"use client";

import { useEffect, useRef, useState } from "react";
import ScrollingDatePicker from "./scrollingDatePicker";

export default function DateInput() {
    const [selectedDate, setSelectedDate] = useState("");
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // بسته شدن با کلیک بیرون
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="py-6">
            <label className="block font-semibold text-gray-600 mb-2">تاریخ تولد</label>

            <div className="relative w-full" ref={wrapperRef}>
                <div onClick={() => setOpen((prev) => !prev)} className="w-full mt-2 border-2 border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100">
                    {selectedDate || "—"}
                </div>
                {open &&
                    <ScrollingDatePicker value={selectedDate} onChange={setSelectedDate} />
                }
            </div>
        </div>
    );
}
// className="p-8 space-y-4"