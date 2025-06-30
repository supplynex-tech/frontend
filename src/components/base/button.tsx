"use client"

import Link from "next/link"

interface PrimaryButtonProps {
    title: string;
    type: "button" | "submit" | "reset";
    onClick: () => void;
    className?: string;
}

interface SecondaryButtonProps {
    title: string;
    href: string;
    className?: string;
}

export function PrimaryActionButton({ title, type, onClick, className = "" }: PrimaryButtonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`px-6 py-3 rounded-lg bg-secondary-500 hover:bg-secondary-400 font-semibold sm:text-md border-0 text-gray-800
                  hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${className}`}
        >
            {title}
        </button>
    )
}

export function SecondaryActionButton({ title, type, onClick, className }: PrimaryButtonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`px-6 py-3 rounded-lg bg-secondary-500 hover:bg-secondary-400 font-semibold sm:text-md border-0 text-gray-800
                  hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${className}`}
        >
            {title}
        </button>
    )
}

export function PrimaryNavigationButton({ title, href, className }: SecondaryButtonProps) {
    return (
        <Link href={href}>
            <button
                className={`px-6 py-3 rounded-lg bg-secondary-500 hover:bg-secondary-400 font-semibold sm:text-md border-0 text-gray-800
                  hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${className}`}
            >
                {title}
            </button>
        </Link >
    )
}

export function SecondaryNavigationButton({ title, href, className }: SecondaryButtonProps) {
    return (
        <Link href={href}>
            <button
                className={`px-6 py-3 rounded-lg bg-primary-300 hover:bg-primary-400 font-semibold sm:text-md border-0 text-gray-800
                  hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${className}`}
            >
                {title}
            </button>
        </Link >
    )
}