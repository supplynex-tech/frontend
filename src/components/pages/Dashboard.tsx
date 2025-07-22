import { storage } from "../../services/storage";
import { ExitNavigationButton, PrimaryIconButton, PrimaryNavigationButton } from "../base/button";
import FormList from "../dashboard/formList";
import Profile from "../dashboard/profile";
import DashboardWrapper from "../dashboard/wrapper";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardPage() {
    const router = useRouter();
    const [search, setSearch] = useState();
    const [status, setStatus] = useState();

    return (
        <DashboardWrapper>
            <div className="flex flex-row justify-between items-center pb-5 md:pb-0">
                <h2 className="text-2xl font-bold">داشبورد</h2>
                <div className="flex items-center gap-2">
                    <PrimaryNavigationButton
                        title="ایجاد فرم جدید"
                        href="/form/default/new"
                        className="hidden md:flex"
                    />
                    <PrimaryIconButton href="/form/default" className="md:hidden">
                        <FaPlus />
                    </PrimaryIconButton>
                    <ExitNavigationButton
                        title="خروج"
                        onClick={() => {
                            storage.deleteItem('accessToken');
                            storage.deleteItem('refreshToken');
                            storage.deleteItem('phone_number');
                            router.replace("/")

                        }
                        }
                    />
                </div>
            </div>

            <Profile setStatus={setStatus} />
            <FormList search={search} setSearch={setSearch} status={status} />
        </DashboardWrapper>
    );
}
