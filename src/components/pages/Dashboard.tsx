import { HugeButton } from "../base/button";
import FormList from "../dashboard/formList";
import Profile from "../dashboard/profile";
import DashboardWrapper from "../dashboard/wrapper";

export default function DashboardPage() {
    return (
        <DashboardWrapper>
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold pb-5 md:pb-0">داشبورد</h2>
                <div className="w-50">
                    <HugeButton title="ایجاد فرم جدید" href="/form" />
                </div>
            </div>
            <Profile />
            <FormList />
        </DashboardWrapper>
    )
}