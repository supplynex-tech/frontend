"use client"

import { FaArrowLeft } from "react-icons/fa";
import { SecondaryIconButton, SecondaryNavigationButton } from "../base/button";
import DashboardWrapper from "../dashboard/wrapper";
import FormView from "../form/formView";

export default function FormPage() {
    return (
        <DashboardWrapper>
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold pb-5 md:pb-0">فرم اول</h2>
                <div>
                    <SecondaryNavigationButton title="بازگشت" href="/dashboard" className="hidden md:block" />
                    <SecondaryIconButton href="/dashboard" className="md:hidden">
                        <FaArrowLeft />
                    </SecondaryIconButton>
                </div>
            </div>
            <FormView />
        </DashboardWrapper >
    )
}