"use client";

import { FormAnswer } from "@/types/api";
import { useState } from "react";

export default function FormAnswers({ formDataAnswers }: { formDataAnswers: FormAnswer[] }) {
    const [preview, setPreview] = useState<string | null>(null);


    return (
        <section className="px-5 text-gray-800 leading-relaxed">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10">
                {formDataAnswers.map((answer) => {
                    return (
                        <div className="pb-5">
                            <span>
                                <span>{answer.form_question_title}</span>
                                <span> : </span>
                                {
                                    answer.answer.includes("http://") || answer.answer.includes("https://") ?
                                        <img
                                            src={answer.answer}
                                            alt={answer.answer}
                                            className="w-24 h-24 object-cover rounded-md shadow-sm hover:scale-105 transition"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setPreview(answer.answer);
                                            }}
                                        /> :
                                        <span>{answer.answer === "undefined" ? "نامشخص" : answer.answer}</span>

                                }
                            </span>
                        </div>
                    );
                })}
                {preview && (
                    <div
                        className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
                        onClick={() => setPreview(null)}
                    >
                        <img
                            src={preview}
                            alt="Preview"
                            className="max-w-3xl max-h-[80vh] rounded-lg shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
