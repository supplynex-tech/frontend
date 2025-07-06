'use client'

import Image from "next/image"
import Link from "next/link"

export default function ResponseView({content}: {
    content: { nextFormID: number, description: string, imageUrl: string }
}) {
    return (
        <div className="flex flex-col gap-3 sm:gap-5 pt-3">
            {content.description &&
                <p className="break-words max-w-full">
                    {content.description}
                </p>
            }
            {content.nextFormID &&
                <Link href={"/form/" + content.nextFormID} className="flex items-center space-x-3">
                <span className="font-bold underline text-primary-300">
                    لینک فرم جدید
                </span>
                </Link>
            }
            {content.imageUrl &&
                <Image
                    src={content.imageUrl}
                    alt="عکس پیش فاکتور"
                    className="w-full max-w-[300px] h-auto rounded-lg object-cover self-center"
                />
            }
        </div>

    )
}