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
import { FormQuestion, FormResult } from "@/types/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValidation, FormValidationGeneratorSchema } from "@/validation/form";
import { sendForm } from "@/services/api/form";
import { storage } from "@/services/localstorage";
import { useRouter } from "next/navigation";


export default function FormView({ formData }: { formData: FormResult }) {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState<FormValidation>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValidation>({
        resolver: zodResolver(FormValidationGeneratorSchema(formData?.questions || [])),
    });

    const onSubmit = (async (data: FormValidation) => {
        if (storage.getItem("phone_number") === null) {
            setData(data)
            setShowModal(true)
        } else {
            try {
                await sendForm(formData.id, data);
                router.push("/dashboard")
            } catch {
            }
        }
    });

    const closeAction = async () => {
        try {
            await sendForm(formData.id, data);
            router.push("/dashboard")
        } catch {
        }
    }

    return (
        <>
            {showModal && <RegisterModal onClose={closeAction} />}
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 pt-5 py-15">
                    {
                        formData?.questions && formData.questions.map((item: FormQuestion) => {
                            switch (item.type) {
                                case "TEXT_INPUT":
                                    return (
                                        <div>
                                            <BaseInput
                                                label={item.title}
                                                placeholder={item.placeholder}
                                                register={register(item.id.toString())}
                                            />
                                            <p className="text-danger text-sm mt-2">
                                                {errors?.[item.id.toString()]?.message}
                                            </p>
                                        </div>
                                    )
                                case "UPLOAD_FILE":
                                    return (
                                        <div>
                                            <UploadFile
                                                label={item.title}
                                                placeholder={item.placeholder}
                                                register={register(item.id.toString())}
                                            />
                                            <p className="text-danger text-sm mt-2">
                                                {errors?.[item.id.toString()]?.message}
                                            </p>
                                        </div>
                                    )
                                case "SELECT":
                                    return (
                                        <div>
                                            <Select
                                                register={register(item.id.toString())}
                                                label={item.title}
                                                placeholder={item.placeholder}
                                                options={item.options}
                                            />
                                            <p className="text-danger text-sm mt-2">
                                                {errors?.[item.id.toString()]?.message}
                                            </p>
                                        </div>
                                    )
                                case "DATE_PICKER":
                                    return (
                                        <div>
                                            <DatePicker
                                                register={register(item.id.toString())}
                                                label={item.title}
                                                placeholder={item.placeholder}
                                            />
                                            <p className="text-danger text-sm mt-2">
                                                {errors?.[item.id.toString()]?.message}
                                            </p>
                                        </div>
                                    )
                                case "RADIO":
                                    return (
                                        <div>
                                            <Radio
                                                register={register(item.id.toString())}
                                                label={item.title}
                                                multi={"multi" in item.options ? item.options.multi : false}
                                                options={"items" in item.options ? item.options.items : []}
                                            />
                                            <p className="text-danger text-sm mt-2">
                                                {errors?.[item.id.toString()]?.message}
                                            </p>
                                        </div>
                                    )
                                case "COUNTER":
                                    return (
                                        <div>
                                            <Counter
                                                register={register(item.id.toString())}
                                                label={item.title}
                                            />
                                            <p className="text-danger text-sm mt-2">
                                                {errors?.[item.id.toString()]?.message}
                                            </p>
                                        </div>
                                    )
                                case "TEXTAREA":
                                    return (
                                        <div>
                                            <Textarea
                                                label={item.title}
                                                register={register(item.id.toString())}
                                                placeholder={item.placeholder}
                                            />
                                            <p className="text-danger text-sm mt-2">
                                                {errors?.[item.id.toString()]?.message}
                                            </p>
                                        </div>
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
        </>
    );
}
