'use client'

import Image from "next/image"
import Link from "next/link"
import image from "@/../public/assets/images/image.jpg";

export default function ResponseView() {
    return (
        <div className="flex flex-col rounded-xl px-5 py-10 w-[400px] gap-5">
            <p>لطفا برای پاسخ به سوالات بیشتر به لینک زیر بروید</p>
            <Link href="/form" className="flex items-center space-x-3">
                <span className="font-bold underline text-primary-300">
                    لینک فرم جدید
                </span>
            </Link>
            <Image
                src={image}
                alt="عکس پیش فاکتور"
                className="w-full"
            />
        </div>
    )
}