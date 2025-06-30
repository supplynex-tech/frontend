"use client"

import { SecondButton } from "../base/button";
import DashboardWrapper from "../dashboard/wrapper";
import FormView from "../form/formView";

export default function FormPage() {
    return (
        <DashboardWrapper>
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold pb-5 md:pb-0">فرم اول</h2>
                <SecondButton title="بازگشت" />
            </div>
            <FormView />
        </DashboardWrapper>
    )
}