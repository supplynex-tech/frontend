"use client";

import React, { Dispatch, JSX, SetStateAction, useEffect, useState } from "react";
import { ResponseModal } from "../base/modal";
import Link from "next/link";
import Pagination from "../base/pagination";
import { getUserFormList } from "@/services/api/dashboard";
import { formatJalali } from "@/services/date";
import TimeFormFilter from "./timeFormFilter";
import { SecondaryActionButton, TertiaryActionButton } from "../base/button";

interface props {
    search?: string;
    status?: string;
    setSearch?: Dispatch<SetStateAction<string | undefined>>

}

export default function FormList({ search, setSearch, status }: props) {
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
        getUserFormList(pageNumber, search, status).then(data => {
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

    }, [pageNumber, search, status]);

    return (
        <section className="pt-10">
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
                <span className="text-lg font-semibold pb-5 justify-self-start">
                    فرم‌های من
                </span>
                <div className="w-full md:w-[400px] justify-self-end">
                    <div className="relative flex gap-2">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>

                        <input
                            type="search"
                            id="default-search"
                            className="block w-full ps-12 pe-5 py-3 text-sm text-gray-800 rounded-lg bg-gray-50 border-2 border-gray-200 focus:border-gray-300 focus:outline-none"
                            placeholder="نام کالای مورد نظر خود را بنویسید..."
                            onChange={(e) => setSearch(e.target.value)}
                        />


                    </div>
                </div>
            </div>

            <div
                className="relative flex flex-col w-full h-full overflow-scroll scrollbar-rounded text-gray-600 bg-gray-50 rounded-lg bg-clip-border">
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
