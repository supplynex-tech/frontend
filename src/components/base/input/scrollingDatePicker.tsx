"use client";

import { useEffect, useRef, useState } from "react";
import { toJalaali, jalaaliMonthLength } from "jalaali-js";

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

const monthNames = [
  "فروردین", "اردیبهشت", "خرداد",
  "تیر", "مرداد", "شهریور",
  "مهر", "آبان", "آذر",
  "دی", "بهمن", "اسفند"
];

interface Props {
  value?: string; // YYYY/MM/DD
  onChange?: (val: string) => void;
}

export default function ScrollingDatePicker({ value, onChange }: Props) {
  const today = toJalaali(new Date());
  const [year, setYear] = useState(today.jy);
  const [month, setMonth] = useState(today.jm);
  const [day, setDay] = useState(today.jd);

  const yearRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLDivElement>(null);

  const years = range(today.jy - 100, today.jy + 10);
  const days = range(1, jalaaliMonthLength(year, month));

  // Update parent value
  useEffect(() => {
    const final = `${year}/${String(month).padStart(2, "0")}/${String(day).padStart(2, "0")}`;
    onChange?.(final);
  }, [year, month, day]);

  // Scroll to center selected items
  useEffect(() => {
    const scrollToCenter = (container: HTMLElement | null, index: number) => {
      if (!container) return;
      const itemHeight = container.firstChild instanceof HTMLElement ? container.firstChild.offsetHeight : 0;
      const scrollTop = index * itemHeight - container.clientHeight / 2 + itemHeight / 2;
      container.scrollTo({ top: scrollTop, behavior: "smooth" });
    };

    scrollToCenter(yearRef.current, years.indexOf(year));
    scrollToCenter(monthRef.current, month - 1);
    scrollToCenter(dayRef.current, days.indexOf(day));
  }, [year, month, day]);

  return (
    <div dir="ltr" className="flex z-50 absolute gap-4 items-start bg-gray-50 p-4 rounded-xl shadow-md w-full mx-auto mt-4">
      {/* سال */}
      <div ref={yearRef} className="flex-1 px-2 h-40 overflow-y-scroll snap-y snap-mandatory [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-200   
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-primary-300">
        {years.map((y) => (
          <div
            key={y}
            onClick={() => setYear(y)}
            className={`snap-start p-2 text-center cursor-pointer rounded ${y === year ? "bg-primary-500 text-gray-300 font-bold" : "text-gray-600"
              }`}
          >
            {y}
          </div>
        ))}
      </div>

      {/* ماه */}
      <div ref={monthRef} className="flex-1 px-2 h-40 overflow-y-scroll snap-y snap-mandatory  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-200   
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-primary-300">
        {monthNames.map((m, idx) => (
          <div
            key={m}
            onClick={() => setMonth(idx + 1)}
            className={`snap-start p-2 text-center cursor-pointer rounded ${idx + 1 === month ? "bg-primary-500 text-gray-300 font-bold" : "text-gray-600"
              }`}
          >
            {m}
          </div>
        ))}
      </div>

      {/* روز */}
      <div ref={dayRef} className="flex-1 px-2 h-40 overflow-y-scroll snap-y snap-mandatory [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-200   
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-primary-300">
        {days.map((d) => (
          <div
            key={d}
            onClick={() => setDay(d)}
            className={`snap-start p-2 text-center cursor-pointer rounded ${d === day ? "bg-primary-500 text-gray-300 font-bold" : "text-gray-600"
              }`}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}
