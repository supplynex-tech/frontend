"use client";

import { PrimaryNavigationButton } from "@/components/base/button";
import { useState } from "react";

export default function FormAnswers() {
    const [answers, setAnswers] = useState([
        { "نام کالا": "کتونی" },
        { "نام کالا": "کتونی" },
        { "نام کالا": " کتونی کتونی کتونی کتونی کتونیکتونی کتونیکتونی کتونیکتونی کتونیکتونی کتونیکتونیکتونی کتونی کتونی کتونی کتونیکتونی کتونیکتونی کتونیکتونی کتونیکتونی کتونیکتونیکتونی کتونی کتونی کتونی کتونیکتونی کتونیکتونی کتونیکتونی کتونیکتونی کتونیکتونیکتونی کتونی کتونی کتونی کتونیکتونی کتونیکتونی کتونیکتونی کتونیکتونی کتونیکتونی" },
        {
            "نام کالا": "کتونی کتونی کتونی کتونی کتونیکتونی کتونیکتونی کتونیکتونی کتونیکتونی کتونیکتونی"
        }
    ]);

    return (
        <section className="px-5 text-gray-800 leading-relaxed">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10">
                {answers.map((answer, index) => {
                    const entries = Object.entries(answer);
                    return (
                        <div key={index} className="pb-5">
                            {entries.map(([key, value], idx) => (
                                <span key={idx}>
                                    <span>{key}</span>
                                    <span> : </span>
                                    <span>{value}</span>
                                </span>
                            ))}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
