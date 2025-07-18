"use client";

import React, { JSX, useEffect, useState } from "react";
import { ResponseModal } from "../base/modal";
import Link from "next/link";
import Pagination from "../base/pagination";
import { getUserFormList } from "@/services/api/dashboard";
import { formatJalali } from "@/services/date";
import TimeFormFilter from "./timeFormFilter";

export default function FormList() {
    interface DashboardRowType {
        id: number;
        name: string;
        status: string;
        createdAt: string;
        description: string;
        imageUrl: string;
    }

    interface DashboardContentType {
        totalCount: number;
        title: string;
        tableHeaders: string[];
        tableData: DashboardRowType[];
    }

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<{ nextFormID: number, description: string, imageUrl: string }>({
        nextFormID: 0,
        description: "",
        imageUrl: ""
    });
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState<DashboardContentType>({
        totalCount: 0,
        title: "داشبورد",
        tableHeaders: ["تاریخ ایجاد", "کد رهگیری", "نام کالا", "وضعیت", "جزئیات"],
        tableData: []
    });

    function getStatusSpan(status: string): JSX.Element {
        const statusMap: Record<string, { label: string; className: string }> = {
            PENDING: {
                label: "در حال بررسی",
                className: "text-secondary-600"
            },
            FINISHED: {
                label: "پایان یافته",
                className: "text-emerald-600",
            },
            NO_ANSWER: {
                label: "در انتظار پاسخ کاربر",
                className: "text-gray-600",
            },
        };

        const { label, className } = statusMap[status] || {
            label: "نامشخص",
            className: "text-gray-400",
        };

        return <span className={className}>{label}</span>;
    }




    useEffect(() => {
        getUserFormList(pageNumber).then(data => {
            const formListData: DashboardRowType[] = []
            data.results.map(data => formListData.push(
                {
                    id: data.id,
                    name: data.main_key?.value || "",
                    status: data.status,
                    createdAt: data.created_time,
                    description: data.description_result,
                    imageUrl: data.image_result
                }
            ))
            setData((prev) => ({
                ...prev,
                totalCount: data.count,
                tableData: formListData,
            }));
        })

    }, [pageNumber]);

    return (
        <section className="pt-10">
            <div className="mb-4 flex justify-between">
                <span className="text-lg font-semibold pb-5">فرم‌های من</span>
            </div>
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
                            {data.tableHeaders.map((header, index) => (
                                <th key={index} className="p-4 border-b border-gray-200 bg-gray-50">
                                    <p className="block text-sm font-normal leading-none text-gray-600">
                                        {header}
                                    </p>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.tableData.map((row, idx) => (
                            <tr key={idx} className="hover:bg-primary-50">
                                <td className="p-4 border-b border-gray-200 text-primary-700 text-sm">{formatJalali(row.createdAt)}</td>
                                <td className="p-4 border-b border-gray-200 text-primary-700 text-sm">{row.id.toString().padStart(7, "0")}</td>
                                <td className="p-4 border-b border-gray-200 text-sm">{row.name}</td>
                                <td className="p-4 border-b border-gray-200 text-sm">
                                    {getStatusSpan(row.status)}
                                </td>
                                <td className="p-4 border-b border-gray-200 text-sm">
                                    <Link href={"/form/" + row.id.toString()} className="text-primary-400 text font-medium hover:underline cursor-pointer animate-bounce">مشاهده</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pt-5 relative flex flex-row justify-end">
                <Pagination totalItems={data.totalCount} itemsPerPage={10} currentPage={pageNumber} onPageChange={setPageNumber} />
            </div>
            {isModalOpen && <ResponseModal onClose={() => setModalOpen(false)} content={modalContent} />}
        </section>
    );
}
