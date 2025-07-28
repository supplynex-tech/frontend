"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
    end: number;
    label: string;
    detail: string;
    suffix?: string;
    prefix?: string;
};

function SingleCounter({ end, label, detail, suffix = "", prefix = "" }: CounterProps) {
    const [count, setCount] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const node = containerRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animateCount(0, end, 1000);
                }
            },
            { threshold: 0.3 }
        );

        if (node) observer.observe(node);

        return () => {
            if (node) observer.unobserve(node);
        };
    }, [end]);

    const animateCount = (start: number, end: number, duration: number) => {
        let startTime: number | null = null;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const current = Math.min(start + ((end - start) * progress) / duration, end);
            setCount(Math.floor(current));

            if (progress < duration) {
                requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(step);
    };

    return (
        <section ref={containerRef} className="flex flex-col items-center text-center space-y-1">
            <div className="text-4xl font-bold text-primary-700">
                {count}
                {suffix}
                {prefix}
            </div>
            <div className="font-semibold text-primary-700">{label}</div>
            <div className="text-sm text-gray-600">{detail}</div>
        </section>
    );
}

export default function Customers() {
    const counters: CounterProps[] = [
        {
            end: 5000,
            label: "درخواست ثبت‌شده",
            detail: "از خریداران کسب‌وکارهای کوچک تا سازمان‌های بزرگ",
            prefix: "+",
        },
        {
            end: 24,
            label: "میانگین زمان دریافت پیشنهاد",
            detail: "فرایند چندروزه را به چند ساعت کاهش دادیم",
            suffix: "h",
        },
        {
            end: 18,
            label: "صرفه‌جویی در هزینه",
            detail: "فقط به خاطر مقایسه، مذاکره و انتخاب هوشمند",
            prefix: "+",
            suffix: "%",
        },
        {
            end: 99,
            label: "رضایت از پرداخت و تحویل",
            detail: "خریداران می‌دانند که پول و کالایشان در امان است",
            suffix: "%",
        },
        {
            end: 20000,
            label: "تأمین‌کننده معتبر تاییدشده",
            detail: "شما مطمئن انتخاب می‌کنید، ما تأمین را تضمین می‌کنیم",
            prefix: "+",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-10 md:py-20 px-6 md:px-20 bg-gray-50 w-full">
            {counters.map((item, index) => (
                <SingleCounter
                    key={index}
                    {...item}
                />
            ))}
        </div>
    );
}
