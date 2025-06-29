"use client"

import { AnimatedText } from "../base/text";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";

const headerContent = {
    title: "خریدارت باهوشه، بازار زیر انگشتشه، پیشنهادش زیر قیمتته",
    subtitle: "هوش مصنوعی SupplyNex مثل یه خریدار حرفه ای تو بازار می‌چرخه، مذاکره می‌کنه و بهترین گزینه‌ها رو برات میاره.",
    animationUrl: "https://lottie.host/128e190a-5135-42de-b482-2028288a2aea/5DhWC2h2tg.lottie",
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
                <div className="w-[90%] md:w-[80%] lg:pt-40 pt-30 lg:pb-20 pb-10 grid grid-cols-1 lg:grid-cols-2 items-center z-10 relative rtl">
                    <DotLottieReact
                        src={headerContent.animationUrl}
                        loop
                        autoplay
                    />
                    <div className="flex flex-col items-center w-full lg:w-[80%]">
                        <h2 className="text-2xl lg:text-3xl text-primary-700 font-bold pb-4">
                            {headerContent.title}
                        </h2>
                        <AnimatedText words={headerContent.subtitle} />
                    </div>
                </div>
            </section>
        </motion.section>
    );
}
