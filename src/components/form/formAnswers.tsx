"use client";

import {FormAnswer, FormResult} from "@/types/api";
import { useState } from "react";

export default function FormAnswers({ formData }: { formData: FormResult }) {
    const [preview, setPreview] = useState<string | null>(null);


    return (
        <section className="px-5 text-gray-800 leading-relaxed">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10">
                {formData.answers.map((answer) => {
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
            </div>

            {(formData.description_result || formData.image_result) && <hr className="my-6 border-t py-5 border-gray-300" />}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10">
                {formData.description_result &&
                <span>توضیحات: {formData.description_result}</span>}
                {formData.image_result &&
                <span>پیوست:
                <img
                    src={formData.image_result}
                    alt={formData.image_result}
                    className="w-24 h-24 object-cover rounded-md shadow-sm hover:scale-105 transition"
                    onClick={(e) => {
                        e.stopPropagation();
                        setPreview(formData.image_result);
                    }}
                />
                    </span>}
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
