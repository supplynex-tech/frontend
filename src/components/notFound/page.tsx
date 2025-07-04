"use client"

import Image from "next/image";
import notFound from "@/../public/assets/images/404.png";
import { PrimaryNavigationButton } from "../base/button";

export default function NotFound() {
    return (
        <div className="w-screen h-screen bg-primary-200 justify-center content-center">
            <section className="flex justify-center md:p-20 px-5 py-10">
                <div className="flex flex-col items-center gap-5">
                    <Image
                        src={notFound}
                        alt="عکس صفحه موجود نیست"
                        className="w-2/5 h-auto"
                    />
                    <p className="text-gray-800">صفحه مورد نظر یافت نشد... :(</p>
                    <PrimaryNavigationButton title="برو به خانه" href="/" />
                </div>
            </section>
        </div>
    );
}
