"use client";

import { FaArrowLeft } from "react-icons/fa";
import { JSX, useEffect, useState } from "react";
import { FormResult } from "@/types/api";
import { AnimatePresence, motion } from "framer-motion";
import { getForm } from "@/services/api/dashboard";
import DashboardWrapper from "@/components/dashboard/wrapper";
import { PrimaryIconButton, PrimaryNavigationButton } from "@/components/base/button";
import FormView from "@/components/form/formView";
import FormAnswers from "../form/formAnswers";


export default function FormDetailPage({ id }: {
    id: string;
}) {
    const [formData, setFormData] = useState<FormResult>();
    const [openIndex, setOpenIndex] = useState<number | null | undefined>(null);

    useEffect(() => {
        getForm(id).then(result => {
            console.log(result)
            setFormData(result)
        })
    }, [id]);

    const RenderForm = (form: FormResult) => {
        let elemet: JSX.Element[] = []
        elemet.push(
            <section
                key={form?.id}
                className="px-5 rounded-lg ring-1 ring-gray-400/50"
            >
                <button
                    onClick={() => { setOpenIndex(openIndex === form?.id ? null : form?.id) }}
                    className="w-full py-4 flex justify-between items-center text-right text-primary-700 text-xl"
                    aria-expanded={openIndex === form?.id}
                >
                    <p>{form?.name}</p>
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ${openIndex === form?.id ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                <AnimatePresence initial={false}>
                    {openIndex === form?.id && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="py-3 text-primary-700 leading-relaxed">
                                {
                                    form?.status === "NO_ANSWER" ? <FormView formData={form} /> : <FormAnswers formDataAnswers={form.answers} />
                                }
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        )
        if (form.next_form_template_result) elemet = [...elemet, ...RenderForm(form.next_form_template_result)]
        return elemet
    }


    return (
        <DashboardWrapper>
            <div className="flex flex-row justify-between items-center pt-5 pb-10">
                {/* <h2 className="text-2xl font-bold">{formData?.name}</h2> */}
                <h2 className="text-2xl font-bold">{formData?.main_key?.title}: {formData?.main_key?.value}</h2>
                <div className="flex items-center gap-2">
                    <PrimaryNavigationButton
                        title="داشبورد"
                        href="/dashboard"
                        className="hidden md:block"
                    />
                    <PrimaryIconButton href="/dashboard" className="md:hidden">
                        <FaArrowLeft />
                    </PrimaryIconButton>
                </div>
            </div>
            <section id="forms" className="w-full flex flex-col gap-5">
                {formData && RenderForm(formData)}
            </section>

        </DashboardWrapper >
    );
}
