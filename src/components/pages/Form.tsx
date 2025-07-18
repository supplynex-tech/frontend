"use client";

import { FaArrowLeft } from "react-icons/fa";
import { PrimaryIconButton, PrimaryNavigationButton, SecondaryIconButton, SecondaryNavigationButton } from "../base/button";
import DashboardWrapper from "../dashboard/wrapper";
import { useEffect, useState } from "react";
import { FormResult } from "@/types/api";
import { AnimatePresence, motion } from "framer-motion";
import { getForm } from "@/services/api/dashboard";
import FormView from "../form/formView";
import FormAnswers from "../form/formAnswers";
import ImageRadio from "../form/imageRadio";


export default function FormPage({ id }: {
    id: string;
}) {
    const [formData, setFormData] = useState<FormResult>();
    const [formList, setFormList] = useState<any[]>([
        {
            "id": 0,
            "name": "ثبت نیاز",
            "questions": [
                {
                    "id": 11,
                    "title": "نام کالا",
                    "placeholder": "مثال: لپ‌تاپ، صندلی اداری و...",
                    "is_required": true,
                    "type": "TEXT_INPUT",
                    "options": []
                },
                {
                    "id": 13,
                    "title": "برند",
                    "placeholder": "در صورت تمایل، نام برند را وارد کنید.",
                    "is_required": false,
                    "type": "TEXT_INPUT",
                    "options": []
                },
                {
                    "id": 14,
                    "title": "مدل",
                    "placeholder": "مدل مورد نظر را وارد کنید.",
                    "is_required": true,
                    "type": "TEXT_INPUT",
                    "options": []
                },
                {
                    "id": 15,
                    "title": "تعداد",
                    "placeholder": "1,2,3,...",
                    "is_required": true,
                    "type": "COUNTER",
                    "options": {
                        "max": 999999999999999
                    }
                },
                {
                    "id": 16,
                    "title": "واحد",
                    "placeholder": "واحد کالای خود را انتخاب کنید.",
                    "is_required": true,
                    "type": "SELECT",
                    "options": [
                        "عدد",
                        "کیلوگرم",
                        "دستگاه",
                        "کارتن",
                        "رول",
                        "بسته"
                    ]
                },
                {
                    "id": 17,
                    "title": "توضیحات",
                    "placeholder": "اطلاعات تکمیلی در صورت نیاز",
                    "is_required": false,
                    "type": "TEXT_INPUT",
                    "options": []
                }
            ]
        },
        {
            "id": 0,
            "name": "ثبت نیاز",
            "questions": [
                {
                    "id": 16,
                    "title": "واحد",
                    "placeholder": "واحد کالای خود را انتخاب کنید.",
                    "is_required": true,
                    "type": "IMAGE_RADIO",
                    "options": [
                        "image"
                    ]
                }
            ]
        }
    ]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        getForm(id).then(result => {
            console.log(result)
            setFormData(result)
        })
    }, [id]);


    return (
        <DashboardWrapper>
            <div className="flex flex-row justify-between items-center py-10">
                {/* <h2 className="text-2xl font-bold">{formData?.name}</h2> */}
                <h2 className="text-2xl font-bold">لیست فرم های من</h2>
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
                {formList.map((form, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <section
                            key={index}
                            className={`${index !== formList.length ? " px-5 rounded-lg ring-1 ring-gray-400/50" : ""}`}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full py-4 flex justify-between items-center text-right text-primary-700 text-xl"
                                aria-expanded={isOpen}
                            >
                                <p>{form?.name}</p>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="py-3 text-primary-700 leading-relaxed">
                                            {/* questions */}
                                            <FormView formData={form} />
                                            {/* answered questions */}
                                            {/* answers */}
                                            {/* <FormAnswers /> */}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </section>
                    );
                })}
            </section>
        </DashboardWrapper>
    );
}
