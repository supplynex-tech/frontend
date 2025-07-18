"use client";

import { FormAnswer } from "@/types/api";

export default function FormAnswers({ formDataAnswers }: { formDataAnswers: FormAnswer[] }) {


    return (
        <section className="px-5 text-gray-800 leading-relaxed">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10">
                {formDataAnswers.map((answer) => {
                    return (
                        <div className="pb-5">
                            <span>
                                    <span>{answer.form_question_title}</span>
                                    <span> : </span>
                                    <span>{answer.answer === "undefined" ? "نامشخص" : answer.answer}</span>
                                </span>     
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
