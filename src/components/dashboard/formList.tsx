"use client";

import React, { useState } from "react";
import { ResponseModal } from "../base/modal";
import Link from "next/link";
import { PrimaryNavigationButton } from "../base/button";
import Pagination from "../base/pagination";

export default function FormList() {
    const dashboardContent = {
        title: "داشبورد",
        tableHeaders: ["نام", "وضعیت", "فرم قبلی", "تاریخ ایجاد", "پاسخ"],
        tableData: [
            { name: "John Michael", status: "در حال بررسی", previousForm: null, createdAt: "1403/03/10" },
            { name: "Alexa Liras", status: "بررسی شده", previousForm: null, createdAt: "1403/02/28" },
            { name: "Laurent Perrier", status: "شروع نشده", previousForm: "./ddf", createdAt: "1403/02/10" },
            { name: "Michael Levi", status: "در حال بررسی", previousForm: null, createdAt: "1403/01/15" },
        ]
    };

    const [isModalOpen, setModalOpen] = useState(false);

    const getStatusClass = (status: string) => {
        switch (status) {
            case "در حال بررسی":
                return "text-secondary-600 font-semibold";
            case "بررسی شده":
                return "text-emerald-600 font-semibold";
            case "شروع نشده":
                return "text-danger font-semibold";
            default:
                return "text-gray-600";
        }
    };

    const getPreviousForm = (form: string | null) => {
        if (!form) {
            return <span className="text-gray-400">ندارد</span>;
        }
        return (
            <Link href={form} className="text-primary-600 underline hover:text-primary-400">
                فرم قبلی
            </Link>
        );
    };

    const getInvoiceClass = (status: string) => {
        return status === "بررسی شده"
            ? "text-primary-400 font-medium hover:underline cursor-pointer"
            : "text-primary-200 font-medium";
    };

    const getResponseText = (status: string, onOpenModal: () => void) => {
        switch (status) {
            case "در حال بررسی":
                return <span className="text-primary-200">مشاهده</span>;
            case "بررسی شده":
                return (
                    <span
                        className="text-primary-400 font-medium hover:underline cursor-pointer"
                        onClick={onOpenModal}
                    >
                        مشاهده
                    </span>
                );
            case "شروع نشده":
                return <Link href="/form" className="text-primary-400 text font-medium hover:underline cursor-pointer animate-bounce">شروع</Link>;
            default:
                return <span className="text-gray-400">نامشخص</span>;
        }
    };

    return (
        <section className="pt-10">
            <span className="block text-lg font-semibold mb-4">فرم‌های من</span>

            <div
                className="relative flex flex-col w-full h-full overflow-scroll text-gray-600 bg-gray-50 rounded-lg bg-clip-border overflow-y-auto
        [&::-webkit-scrollbar]:h-1
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-200
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-primary-300"
            >
                <table className="w-full text-right table-auto min-w-max">
                    <thead>
                        <tr>
                            {dashboardContent.tableHeaders.map((header, index) => (
                                <th key={index} className="p-4 border-b border-gray-200 bg-gray-50">
                                    <p className="block text-sm font-normal leading-none text-gray-600">
                                        {header}
                                    </p>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {dashboardContent.tableData.map((row, idx) => (
                            <tr key={idx} className="hover:bg-primary-50">
                                <td className="p-4 border-b border-gray-200 text-primary-700 text-sm">{row.name}</td>
                                <td className="p-4 border-b border-gray-200 text-sm">
                                    <span className={getStatusClass(row.status)}>{row.status}</span>
                                </td>
                                <td className="p-4 border-b border-gray-200 text-sm">
                                    {getPreviousForm(row.previousForm)}
                                </td>
                                <td className="p-4 border-b border-gray-200 text-primary-700 text-sm">{row.createdAt}</td>
                                <td className="p-4 border-b border-gray-200 text-sm">
                                    {getResponseText(row.status, () => setModalOpen(true))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pt-5 relative flex flex-row justify-end">
                <Pagination totalItems={12} itemsPerPage={5} currentPage={1} />
            </div>
            {isModalOpen && <ResponseModal onClose={() => setModalOpen(false)} />}
        </section>
    );
}
