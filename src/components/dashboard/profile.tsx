"use client";

import Image from "next/image";
import userImage from "@/../public/assets/images/user.png";

interface Phone {
    title: string;
    number: string;
}

interface StatItem {
    count: number;
    label: string;
    color: keyof typeof colorClasses;
}

interface UserData {
    text: string;
    phone: Phone;
    stats: StatItem[];
}

const colorClasses = {
    "primary-500": {
        border: "border-primary-500",
        text: "text-primary-500",
    },
    "secondary-500": {
        border: "border-secondary-500",
        text: "text-secondary-500",
    },
    "emerald-600": {
        border: "border-emerald-600",
        text: "text-emerald-600",
    },
} as const;

const userData: UserData = {
    text: "خوش آمدید.",
    phone: { title: "شماره همراه", number: "09337827049" },
    stats: [
        {
            count: 4,
            label: "شروع نشده",
            color: "primary-500",
        },
        {
            count: 1,
            label: "در حال بررسی",
            color: "secondary-500",
        },
        {
            count: 2,
            label: "بررسی شده",
            color: "emerald-600",
        },
    ],
};

export default function Profile() {
    return (
        <section className="flex flex-col items-center rounded-xl max-w-md mx-auto">
            <Image src={userImage} alt="عکس کاربر" className="h-20 w-20" />
            <div className="text-center pt-5">
                <p className="text-primary-700 text-xl font-semibold mb-3">
                    {userData.text}
                </p>
                <span className="text-gray-600 text-md">
                    {userData.phone.title}: {userData.phone.number}
                </span>
            </div>
            <div className="grid grid-cols-xs-1 grid-cols-3 gap-5 mt-5 w-full">
                {userData.stats.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center bg-gray-50 border-l-4 ${colorClasses[item.color].border
                            } rounded-lg py-3 shadow-sm`}
                    >
                        <span
                            className={`text-xl font-bold ${colorClasses[item.color].text
                                }`}
                        >
                            {item.count}
                        </span>
                        <span className="text-xs text-gray-600">{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
