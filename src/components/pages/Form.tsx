"use client";

import { FaArrowLeft } from "react-icons/fa";
import { SecondaryIconButton, SecondaryNavigationButton } from "../base/button";
import DashboardWrapper from "../dashboard/wrapper";
import FormView from "../form/formView";
import {useEffect, useState} from "react";
import { getForm } from "@/services/api/dashboard";
import {FormResult} from "@/types/api";

interface FormPageProps {
  id: string;
}

export default function FormPage({id}: FormPageProps) {
    const [formData, setFormData] = useState<FormResult>();

    useEffect(() => {
        getForm(id).then(result => {
            setFormData(result)
        })
    }, []);


    return (
        <DashboardWrapper>
            <div className="flex flex-row justify-between items-center pb-5 md:pb-0">
                <h2 className="text-2xl font-bold">{formData?.name}</h2>
                <div className="flex items-center gap-2">
                    <SecondaryNavigationButton
                        title="بازگشت"
                        href="/dashboard"
                        className="hidden md:block"
                    />
                    <SecondaryIconButton href="/dashboard" className="md:hidden">
                        <FaArrowLeft />
                    </SecondaryIconButton>
                </div>
            </div>

            <FormView formData={formData} />
        </DashboardWrapper>
    );
}
