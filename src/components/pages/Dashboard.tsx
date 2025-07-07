import { PrimaryIconButton, PrimaryNavigationButton } from "../base/button";
import FormList from "../dashboard/formList";
import Profile from "../dashboard/profile";
import DashboardWrapper from "../dashboard/wrapper";
import { FaPlus } from "react-icons/fa";

export default function DashboardPage() {
    return (
        <DashboardWrapper>
            <div className="flex flex-row justify-between items-center pb-5 md:pb-0">
                <h2 className="text-2xl font-bold">داشبورد</h2>
                <div className="flex items-center gap-2">
                    <PrimaryNavigationButton
                        title="ایجاد فرم جدید"
                        href="/form/default"
                        className="hidden md:flex"
                    />
                    <PrimaryIconButton href="/form/default" className="md:hidden">
                        <FaPlus />
                    </PrimaryIconButton>
                </div>
            </div>

            <Profile />
            <FormList />
        </DashboardWrapper>
    );
}
