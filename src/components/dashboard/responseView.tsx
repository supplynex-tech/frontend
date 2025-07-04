'use client'

import Image from "next/image"
import Link from "next/link"
import image from "@/../public/assets/images/image.jpg";

export default function ResponseView() {
    return (
        <div className="flex flex-col gap-3 sm:gap-5 pt-3">
            <p className="break-words max-w-full">
                لطفا برای پاسخ به سوالات بیشتر به لینک زیر بروید
            </p>
            <Link href="/form" className="flex items-center space-x-3">
                <span className="font-bold underline text-primary-300">
                    لینک فرم جدید
                </span>
            </Link>
            <Image
                    src={image}
                    alt="عکس پیش فاکتور"
                    className="w-full max-w-[300px] h-auto rounded-lg object-cover self-center"
                />
        </div>

    )
}