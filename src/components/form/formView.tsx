"use client";

import {useState} from "react";
import BaseInput from "../base/input/input";
import Textarea from "../base/input/textarea";
import UploadFile from "../base/input/uploadFile";
import Select from "../base/input/select";
import DatePicker from "../base/input/datePicker";
import Radio from "../base/input/radio";
import Counter from "../base/input/counter";
import {RegisterModal} from "../base/modal";
import {PrimaryActionButton} from "../base/button";
import {FormQuestion, FormResult} from "@/types/api";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormValidation, FormValidationGeneratorSchema} from "@/validation/form";
import {Register} from "@/validation/register";
import {sendOTP} from "@/services/api/register";
import {sendForm} from "@/services/api/form";

interface FormConfig {
    phone: { label: string; placeholder: string };
    link: { label: string; placeholder: string };
    title: { label: string; placeholder: string };
    description: { label: string; placeholder: string };
    attachment: { label: string };
    select: { label: string; options: string[] };
    date: { label: string };
    radio: { label: string; options: string[] };
    participants: { label: string; max: number };
    otp: { label: string };
}

const formConfig: FormConfig = {
    phone: {
        label: "شماره تماس برای پیگیری سفارش",
        placeholder: "مثلاً 09121234567",
    },
    link: {
        label: "لینک مدل کتونی مورد نظر",
        placeholder: "مثلاً https://nike.com/air-max-270",
    },
    title: {
        label: "عنوان درخواست",
        placeholder: "مثلاً خرید کتونی نایک ایر",
    },
    description: {
        label: "توضیحات بیشتر",
        placeholder: "سایز، رنگ، یا ویژگی خاصی مد نظر دارید؟",
    },
    attachment: {label: "آپلود عکس کتونی دلخواه"},
    select: {
        label: "انتخاب برند مورد نظر",
        options: ["Nike", "Adidas", "Puma", "New Balance"],
    },
    date: {label: "تاریخ مورد نیاز بودن کتونی"},
    radio: {
        label: "نوع خرید",
        options: ["نقدی", "اقساطی"],
    },
    participants: {label: "تعداد سفارش‌ها", max: 10},
    otp: {label: "کد تایید پیامکی"},
};

export default function FormView({formData}: { formData: FormResult }) {
    const [showModal, setShowModal] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormValidation>({
        resolver: zodResolver(FormValidationGeneratorSchema(formData?.questions || [])),
    });

    const onSubmit = (async (data: FormValidation) => {
        try {
            await sendForm(formData.id, data);
        } catch (err) { }
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {showModal && <RegisterModal onClose={() => setShowModal(false)}/>}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 pt-5 py-15">
                {
                    formData?.questions && formData.questions.map((item: FormQuestion) => {
                        switch (item.type) {
                            case "TEXT_INPUT":
                                return (
                                    <>
                                        <BaseInput
                                            label={item.title}
                                            placeholder={item.placeholder}
                                            register={register(item.id.toString())}
                                        />
                                        <p className="text-danger text-sm mt-2">
                                            {errors?.[item.id.toString()]?.message}
                                        </p>
                                    </>
                                )
                            case "UPLOAD_FILE":
                                return (
                                    <>
                                        <UploadFile
                                            label={item.title}
                                            placeholder={item.placeholder}
                                            register={register(item.id.toString())}
                                        />
                                        <p className="text-danger text-sm mt-2">
                                            {errors?.[item.id.toString()]?.message}
                                        </p>
                                    </>
                                )
                            case "SELECT":
                                return (
                                    <>
                                        <Select
                                            register={register(item.id.toString())}
                                            label={item.title}
                                            placeholder={item.placeholder}
                                            options={item.options}
                                        />
                                        <p className="text-danger text-sm mt-2">
                                            {errors?.[item.id.toString()]?.message}
                                        </p>
                                    </>
                                )
                            case "DATE_PICKER":
                                return (
                                    <>
                                        <DatePicker
                                            register={register(item.id.toString())}
                                            label={item.title}
                                            placeholder={item.placeholder}
                                        />
                                        <p className="text-danger text-sm mt-2">
                                            {errors?.[item.id.toString()]?.message}
                                        </p>
                                    </>
                                )
                            case "RADIO":
                                return (
                                    <>
                                        <Radio
                                            register={register(item.id.toString())}
                                            label={item.title}
                                            multi={"multi" in item.options ? item.options.multi : false}
                                            options={"items" in item.options ? item.options.items : []}
                                        />
                                        <p className="text-danger text-sm mt-2">
                                            {errors?.[item.id.toString()]?.message}
                                        </p>
                                    </>
                                )
                            case "COUNTER":
                                return (
                                    <>
                                        <Counter
                                            register={register(item.id.toString())}
                                            label={item.title}
                                            max={"max" in item.options ? item.options.max : 100}
                                        />
                                        <p className="text-danger text-sm mt-2">
                                            {errors?.[item.id.toString()]?.message}
                                        </p>
                                    </>
                                )
                            case "TEXTAREA":
                                return (
                                    <>
                                        <Textarea
                                            label={item.title}
                                            register={register(item.id.toString())}
                                            placeholder={item.placeholder}
                                        />
                                        <p className="text-danger text-sm mt-2">
                                            {errors?.[item.id.toString()]?.message}
                                        </p>
                                    </>
                                )
                            default:
                                return (<></>)
                        }
                    })
                }
            </div>

            <div className="flex justify-center">
                <PrimaryActionButton
                    title="ثبت"
                    type="submit"
                    className="px-20"
                />
            </div>
        </form>
    );
}
