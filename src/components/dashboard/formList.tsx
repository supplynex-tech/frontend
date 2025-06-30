"use client";

import React, { useState } from "react";
import Modal, { ResponseModal } from "../base/modal";

export default function FormList() {
    const tableHeaders = ["نام", "وضعیت", "تاریخ ایجاد", "فاکتور"];
    const tableData = [
        { name: "John Michael", status: "در حال بررسی", createdAt: "1403/03/10" },
        { name: "Alexa Liras", status: "بررسی شده", createdAt: "1403/02/28" },
        { name: "Laurent Perrier", status: "بررسی شده", createdAt: "1403/02/10" },
        { name: "Michael Levi", status: "در حال بررسی", createdAt: "1403/01/15" },
    ];

    const [isModalOpen, setModalOpen] = useState(false);

    const getStatusClass = (status: string) => {
        switch (status) {
            case "در حال بررسی":
                return "text-secondary-600 font-semibold";
            case "بررسی شده":
                return "text-emerald-600 font-semibold";
            default:
                return "text-gray-600";
        }
    };

    const getInvoiceClass = (status: string) => {
        return status === "بررسی شده"
            ? "text-primary-400 font-medium hover:underline cursor-pointer"
            : "text-primary-200 font-medium";
    };

    return (
        <section className="pt-10">
            <span className="block text-lg font-semibold mb-4">فرم‌های من</span>

            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-600 bg-gray-50 rounded-lg bg-clip-border overflow-y-auto
        [&::-webkit-scrollbar]:h-1
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-200
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-primary-300"
            >
                <table className="w-full text-right table-auto min-w-max">
                    <thead>
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th key={index} className="p-4 border-b border-gray-200 bg-gray-50">
                                    <p className="block text-sm font-normal leading-none text-gray-600">
                                        {header}
                                    </p>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, idx) => (
                            <tr key={idx} className="hover:bg-primary-50">
                                <td className="p-4 border-b border-gray-200 text-primary-700 text-sm">{row.name}</td>
                                <td className="p-4 border-b border-gray-200 text-sm">
                                    <span className={getStatusClass(row.status)}>{row.status}</span>
                                </td>
                                <td className="p-4 border-b border-gray-200 text-primary-700 text-sm">{row.createdAt}</td>
                                <td className="p-4 border-b border-gray-200 text-sm">
                                    <span
                                        className={getInvoiceClass(row.status)}
                                        onClick={() => {
                                            if (row.status === "بررسی شده") setModalOpen(true);
                                        }}
                                    >
                                        مشاهده
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && <ResponseModal onClose={() => setModalOpen(false)} />}
        </section>
    );
}
