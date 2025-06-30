"use client";

import { useEffect, useRef, useState } from "react";
import ScrollingDatePicker from "./scrollingDatePicker";
import InputBox from "./inputBox";

export default function DateInput({ label, name }) {
    const [selectedDate, setSelectedDate] = useState("");
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

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
        <InputBox label={label} name={name}>
            <div className="relative w-full" ref={wrapperRef}>
                <div onClick={() => setOpen((prev) => !prev)} className={`w-full mt-2 border-2 border-gray-200 px-3 py-2 rounded-lg focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100  ${open
                    ? "border-primary-100 ring-1 ring-primary-100"
                    : "border-gray-200 focus:border-primary-100 focus:ring-1 focus:ring-primary-100"
                    }`}>
                    {selectedDate || "—"}
                </div>
                {open &&
                    <ScrollingDatePicker value={selectedDate} onChange={setSelectedDate} />
                }
            </div>
        </InputBox>
    );
}