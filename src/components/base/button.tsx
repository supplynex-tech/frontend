"use client"

import Link from "next/link"

export function AnimatedButton({ children, width = 'w-auto', height, href = "/", type = "button" }) {
    return (
        <Link href={href}>
            <button
                type={type}
                className={`px-6 py-3  rounded-lg bg-secondary-500 hover:bg-secondary-400 font-semibold sm:text-lg border-0 text-gray-800
                  hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${width} sm:${height}`}
            >
                {children}
            </button>
        </Link >
    )
}

export function TinyButton({ title, href }) {
    return <AnimatedButton width="w-[150px]" href={href}>{title}</AnimatedButton>
}

export function HugeButton({ title, href }) {
    return <AnimatedButton width="w-full" height="h-[60px]" href={href}>{title}</AnimatedButton>
}

export function SubmitButton({ title, href }) {
    return <AnimatedButton width="w-[150px]" height="h-[40px]" href={href} type="submit">{title}</AnimatedButton>
}