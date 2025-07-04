import { PrimaryIconButton, PrimaryNavigationButton } from "../base/button";
import FormList from "../dashboard/formList";
import Profile from "../dashboard/profile";
import DashboardWrapper from "../dashboard/wrapper";
import { FaPlus } from "react-icons/fa";


export default function DashboardPage() {
    return (
        <DashboardWrapper>
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold pb-5 md:pb-0">داشبورد</h2>
                <div>
                    <PrimaryNavigationButton title="ایجاد فرم جدید" href="/form" className="hidden md:flex" />
                    <PrimaryIconButton href="/form" className="md:hidden">
                        <FaPlus />
                    </PrimaryIconButton>
                </div>
            </div>
            <Profile />
            <FormList />
        </DashboardWrapper>
    )
}