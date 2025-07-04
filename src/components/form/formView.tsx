"use client";

import { useState } from "react";
import BaseInput from "../base/input/input";
import Textarea from "../base/input/textarea";
import UploadFile from "../base/input/uploadFile";
import Select from "../base/input/select";
import DatePicker from "../base/input/datePicker";
import Radio from "../base/input/radio";
import Counter from "../base/input/counter";
import { RegisterModal } from "../base/modal";
import { PrimaryActionButton } from "../base/button";

const formConfig = {
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
    attachment: {
        label: "آپلود عکس کتونی دلخواه",
    },
    select: {
        label: "انتخاب برند مورد نظر",
        options: ["Nike", "Adidas", "Puma", "New Balance"],
    },
    date: {
        label: "تاریخ مورد نیاز بودن کتونی",
    },
    radio: {
        label: "نوع خرید",
        options: ["نقدی", "اقساطی"],
    },
    participants: {
        label: "تعداد سفارش‌ها",
        max: 10,
    },
    otp: {
        label: "کد تایید پیامکی",
    },
};


export default function FormView() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = () => {
        //TODO: بررسی لاگین بودن
        setShowModal(true);
    };

    return (
        <>
            {showModal && <RegisterModal onClose={() => setShowModal(false)} />}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 pt-5 py-15">
                <BaseInput label={formConfig.phone.label} name="phone" placeholder={formConfig.phone.placeholder} type="tel" />
                <BaseInput label={formConfig.link.label} name="link" placeholder={formConfig.link.placeholder} type="url" />
                <BaseInput label={formConfig.title.label} name="title" placeholder={formConfig.title.placeholder} />
                <UploadFile label={formConfig.attachment.label} name="attachment" />
                {/* <Select label={formConfig.select.label} name="select" options={formConfig.select.options} /> */}
                <Select label={formConfig.select.label} name="select" />
                <DatePicker label={formConfig.date.label} name="date" />
                {/* <Radio label={formConfig.radio.label} name="radio" options={formConfig.radio.options} /> */}
                <Radio label={formConfig.radio.label} name="radio" />
                <Counter label={formConfig.participants.label} name="participants" max={formConfig.participants.max} />
                <Textarea label={formConfig.description.label} name="description" placeholder={formConfig.description.placeholder} />


            </div>

            <div className="flex justify-center">
                <PrimaryActionButton title="ثبت" type="submit" onClick={handleSubmit} className="px-20" />
            </div>

        </>
    );
}
