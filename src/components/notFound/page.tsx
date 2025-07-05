"use client";

import Image from "next/image";
import notFound from "@/../public/assets/images/404.png";
import { PrimaryNavigationButton } from "../base/button";

export default function NotFound() {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-primary-200">
            <section className="flex flex-col items-center gap-5 md:p-20 px-5 py-10">
                <Image
                    src={notFound}
                    alt="صفحه مورد نظر یافت نشد"
                    className="w-2/5 md:w-1/3 h-auto"
                />
                <p className="text-gray-800 text-center">صفحه مورد نظر یافت نشد... :(</p>
                <PrimaryNavigationButton title="برو به خانه" href="/" />
            </section>
        </div>
    );
}
