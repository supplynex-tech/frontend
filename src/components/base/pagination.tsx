import React from "react";

interface PaginationProps {
  totalItems: number; // تعداد کل آیتم‌ها
  itemsPerPage: number; // تعداد آیتم در هر صفحه
  currentPage: number; // صفحه فعلی
  onPageChange?: (page: number) => void; // هندل تغییر صفحه
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange = () => {},
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex flex-wrap items-center gap-1 text-sm">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 text-gray-500 bg-gray-50 rounded-2xl hover:bg-primary-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>

        {/* Page Numbers */}
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center px-3 h-8 rounded-2xl transition ${
                page === currentPage
                  ? "bg-primary-100 text-primary-600"
                  : "bg-gray-50 text-gray-500 hover:bg-primary-50 hover:text-gray-700"
              }`}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-8 text-gray-500 bg-gray-50 rounded-2xl hover:bg-primary-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
