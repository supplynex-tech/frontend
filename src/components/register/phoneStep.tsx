"use client";

import { useState } from "react";
import BaseInput from "../base/input/input";
import { PrimaryActionButton } from "../base/button";

interface PhoneStepProps {
    onSubmit: (phone: string) => void;
};

export default function PhoneStep({ onSubmit }: PhoneStepProps) {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        const trimmedPhone = phone.trim();
        const isValidPhone = /^09\d{9}$/.test(trimmedPhone);
        if (!isValidPhone) {
            setError("شماره تماس معتبر وارد کنید");
            return;
        }

        setError("");
        onSubmit(trimmedPhone);
    };

    return (
        <>
            <p className="text-gray-600">شماره همراه خود را وارد کنید.</p>
            <BaseInput
                label="شماره همراه"
                name="phone"
                type="tel"
                placeholder="09121234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            {error && <p className="text-danger text-sm mt-2">{error}</p>}
            <PrimaryActionButton
                type="submit"
                title="تأیید"
                onClick={handleSubmit}
                className="px-10 mt-3"
            />
        </>
    );
}
