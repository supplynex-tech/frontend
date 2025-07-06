"use client"

import Link from "next/link"
import { ReactNode } from "react";

interface PrimaryButtonProps {
    title: string;
    type: "button" | "submit" | "reset";
    className?: string;
}

interface SecondaryButtonProps {
    title?: string;
    href: string;
    className?: string;

    children?: ReactNode;
}

export function PrimaryActionButton({ title, type, className = "" }: PrimaryButtonProps) {
    return (
        <button
            type={type}
            className={`px-6 py-2 rounded-lg bg-secondary-500 hover:bg-secondary-400 font-semibold sm:text-md border-0 text-gray-800
                  hover:-translate-y-1 transform transition duration-200 hover:shadow-md cursor-pointer ${className}`}
        >
            {title}
        </button>
    )
}

export function SecondaryActionButton({ title, type, className }: PrimaryButtonProps) {
    return (
        <button
            type={type}
            className={`px-6 py-2 rounded-lg bg-secondary-500 hover:bg-secondary-400 font-semibold sm:text-md border-0  text-gray-50
                  hover:-translate-y-1 transform transition duration-200 hover:shadow-md cursor-pointer ${className}`}
        >
            {title}
        </button>
    )
}

export function PrimaryNavigationButton({ title, href, className }: SecondaryButtonProps) {
    return (
        <Link href={href}>
            <button
                className={`px-6 py-2 rounded-lg bg-secondary-500 hover:bg-secondary-400 font-semibold sm:text-md border-0 text-gray-800
                  hover:-translate-y-1 transform transition duration-200 hover:shadow-md cursor-pointer ${className}`}
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
                className={`px-6 py-2 rounded-lg bg-primary-300 hover:bg-primary-400 font-semibold sm:text-md border-0 text-gray-50
                  hover:-translate-y-1 transform transition duration-200 hover:shadow-md cursor-pointer ${className}`}
            >
                {title}
            </button>
        </Link >
    )
}


export function PrimaryIconButton({ href, children, className }: SecondaryButtonProps) {
    return (
        <Link href={href}>
            <button className={`flex items-center justify-center w-10 h-10 rounded-full bg-secondary-500 hover:bg-secondary-400 text-gray-800 md:hidden hover:-translate-y-1 transform transition duration-200 hover:shadow-md cursor-pointer ${className}`} >
                {children}
            </button>
        </Link >
    )
}

export function SecondaryIconButton({ href, children, className }: SecondaryButtonProps) {
    return (
        <Link href={href}>
            <button className={`flex items-center justify-center w-10 h-10 rounded-full bg-primary-300 hover:bg-primary-400 text-gray-50 md:hidden hover:-translate-y-1 transform transition duration-200 hover:shadow-md cursor-pointer ${className}`} >
                {children}
            </button>
        </Link >
    )
}
