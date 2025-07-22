"use client";

import { storage } from "../../services/storage";
import { ExitNavigationButton, PrimaryIconButton, PrimaryNavigationButton, SecondaryIconButton } from "../base/button";
import FormList from "../dashboard/formList";
import Profile from "../dashboard/profile";
import DashboardWrapper from "../dashboard/wrapper";
import { FaHome, FaPlus, FaSignOutAlt } from "react-icons/fa";
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
                <div className="flex gap-2">
                    <PrimaryNavigationButton
                        title="ایجاد فرم جدید"
                        href="/form/default/new"
                        className="hidden md:flex  bg-secondary-500 hover:bg-secondary-400 text-gray-800"
                    />
                    <PrimaryNavigationButton
                        title="خانه"
                        href="/"
                        className="hidden md:flex bg-primary-500 hover:bg-primary-400 text-gray-50"
                    />

                    <ExitNavigationButton
                        title="خروج"
                        onClick={() => {
                            storage.deleteItem('accessToken');
                            storage.deleteItem('refreshToken');
                            storage.deleteItem('phone_number');
                            router.replace("/")
                        }
                        }
                        className="hidden md:flex"
                    />
                    <PrimaryIconButton href="/form/default" className="md:hidden bg-secondary-500">
                        <FaPlus />
                    </PrimaryIconButton>
                    <PrimaryIconButton href="/" className="md:hidden bg-primary-500">
                        <FaHome />
                    </PrimaryIconButton>
                    <SecondaryIconButton type="button" className="md:hidden bg-red-600">
                        <FaSignOutAlt className="text-gray-50" onClick={() => {
                            storage.deleteItem('accessToken');
                            storage.deleteItem('refreshToken');
                            storage.deleteItem('phone_number');
                            router.replace("/")

                        }
                        } />
                    </SecondaryIconButton>
                </div>
            </div>

            <Profile setStatus={setStatus} />
            <FormList search={search} setSearch={setSearch} status={status} />
        </DashboardWrapper>
    );
}
