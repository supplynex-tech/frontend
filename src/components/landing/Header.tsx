"use client";

import { AnimatedText } from "../base/text";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { PrimaryNavigationButton } from "../base/button";

interface HeaderContent {
    title1: string;
    title2: string;
    subtitle: string;
    animationUrl: string;
    button: string;
}
const headerContent: HeaderContent = {
    title1: "خریدارت باهوشه،",
    title2: "بازار زیر انگشتشه، پیشنهادش زیر قیمتته",
    subtitle:
        "هوش مصنوعی SupplyNex مثل یه خریدار حرفه‌ای تو بازار می‌چرخه، مذاکره می‌کنه و بهترین گزینه‌ها رو برات میاره.",
    animationUrl:
        "https://lottie.host/128e190a-5135-42de-b482-2028288a2aea/5DhWC2h2tg.lottie",
    button: "شروع",
};

export default function Header() {
    return (
        <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <section className="flex justify-center">
                <div className="w-[90%] md:w-[80%] grid grid-cols-1 lg:grid-cols-2 items-center lg:pt-50 pt-30 lg:pb-30 pb-10 relative rtl">
                    <DotLottieReact src={headerContent.animationUrl} loop autoplay />
                    <div className="flex flex-col items-center w-full lg:w-[80%]">
                        <div>
                            <h2 className="text-2xl lg:text-3xl text-primary-700 font-bold pb-4">
                                {headerContent.title1}
                            </h2>
                            <h2 className="text-2xl lg:text-3xl text-primary-700 font-bold pb-4">
                                {headerContent.title2}
                            </h2>
                        </div>

                        <AnimatedText words={headerContent.subtitle} />

                        <div className="w-full py-10">
                            <PrimaryNavigationButton
                                title={headerContent.button}
                                href="/form/default"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </motion.section>
    );
}
