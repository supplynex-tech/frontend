"use client";

import { FormResult } from "@/types/api";
import { useState } from "react";

export default function FormAnswers({ formData }: { formData: FormResult }) {
    const [preview, setPreview] = useState<string | null>(null);


    return (
        <section className="px-5 text-gray-800 leading-relaxed">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 rtl:*">
                {formData.answers.map((answer) => {
                    console.log(answer.form_question_title, answer.answer)
                    return (
                        <div className="pb-5">
                            <span>{answer.form_question_title}: </span>
                            {
                                answer.image?.includes("http://") ||
                                    answer.image?.includes("https://") ||
                                    answer.answer.includes("http://") ||
                                    answer.answer.includes("https://") ?
                                    <img
                                        src={answer.image || answer.answer}
                                        alt={answer.image || answer.answer}
                                        className="w-24 h-24 object-cover rounded-md shadow-sm hover:scale-105 transition"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setPreview(answer.image || answer.answer);
                                        }}
                                    /> :
                                    <span>{answer.answer === "undefined" ? "نامشخص" : answer.answer}</span>

                            }
                        </div>
                    );
                })}
            </div>

            {(formData.description_result || formData.image_result) && <hr className=" border-t pt-5 border-gray-300" />}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10">
                {formData.description_result &&
                    <span>توضیحات: {formData.description_result}</span>}
                {formData.image_result &&
                    <div className="flex flex-row">
                        <span className="pl-5">پیوست:</span>
                        <img
                            src={formData.image_result}
                            alt={formData.image_result}
                            className="w-24 h-24 object-cover rounded-md shadow-sm hover:scale-105 transition"
                            onClick={(e) => {
                                e.stopPropagation();
                                setPreview(formData.image_result);
                            }}
                        />
                    </div>
                }
                {preview && (
                    <div
                        className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
                        onClick={() => setPreview(null)}
                    >
                        <div className="relative">
                            <img
                                src={preview}
                                alt="Preview"
                                className="max-w-3xl max-h-[80vh] rounded-lg shadow-xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <button
                                onClick={async (e) => {
                                    e.stopPropagation();
                                    const response = await fetch(preview.replace("http://", "https://"));
                                    const blob = await response.blob();
                                    const url = window.URL.createObjectURL(blob);
                                    const link = document.createElement('a');
                                    link.href = url;
                                    link.download = 'image.jpg'; // اسم فایلی که دانلود میشه
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                    window.URL.revokeObjectURL(url);
                                }}
                                className="absolute top-3 right-3 bg-secondary-500 text-black px-3 py-1 rounded shadow hover:bg-secondary-400"
                            >
                                دانلود
                            </button>
                        </div>
                    </div>
                )}


            </div>
        </section>
    );
}
