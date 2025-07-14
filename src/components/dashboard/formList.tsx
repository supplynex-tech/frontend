"use client";

import React, { useEffect, useState } from "react";
import { ResponseModal } from "../base/modal";
import Link from "next/link";
import Pagination from "../base/pagination";
import { getUserFormList } from "@/services/api/dashboard";
import { formatJalali } from "@/services/date";

export default function FormList() {
    interface DashboardRowType {
        id: number;
        name: string;
        status: string;
        previousForm: string | null;
        createdAt: string;
        description: string;
        nextFormID: number;
        imageUrl: string;
    }

    interface DashboardContentType {
        totalCount: number;
        title: string;
        tableHeaders: string[];
        tableData: DashboardRowType[];
    }

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<{nextFormID: number, description: string, imageUrl: string}>({
        nextFormID: 0,
        description: "",
        imageUrl: ""
    });
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState<DashboardContentType>({
        totalCount: 0,
        title: "داشبورد",
        tableHeaders: ["نام", "وضعیت", "تاریخ ایجاد", "پاسخ"],
        tableData: []
    });

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

    const getResponseText = (status: string, onOpenModal: () => void, id: number) => {
        switch (status) {
            case "PENDING":
                return <span className="text-primary-200">مشاهده</span>;
            case "FINISHED":
                return (
                    <span
                        className="text-primary-400 font-medium hover:underline cursor-pointer"
                        onClick={onOpenModal}
                    >
                        مشاهده
                    </span>
                );
            case "NO_ANSWER":
                return <Link href={"/form/" + id.toString()} className="text-primary-400 text font-medium hover:underline cursor-pointer animate-bounce">شروع</Link>;
            default:
                return <span className="text-gray-400">نامشخص</span>;
        }
    };

    useEffect(() => {
        getUserFormList(pageNumber).then(data => {
            const formListData: DashboardRowType[] = []
            data.results.map(data => formListData.push(
                {
                    id: data.id,
                    name: data.name,
                    status: data.status,
                    previousForm: data.previous_form_template_result?.toString(),
                    nextFormID: data.next_form_template_result,
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
            console.log(formListData)

        })

    }, [pageNumber]);

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
                                <td className="p-4 border-b border-gray-200 text-primary-700 text-sm">{row.name}</td>
                                <td className="p-4 border-b border-gray-200 text-sm">
                                    <span className={getStatusClass(row.status)}>{row.status}</span>
                                </td>
                                <td className="p-4 border-b border-gray-200 text-primary-700 text-sm">{formatJalali(row.createdAt)}</td>
                                <td className="p-4 border-b border-gray-200 text-sm">
                                    {getResponseText(row.status, () => {
                                        setModalOpen(true);
                                        setModalContent({
                                            nextFormID: row.nextFormID,
                                            description: row.description,
                                            imageUrl: row.imageUrl,
                                        });
                                    }, row.id)}
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
