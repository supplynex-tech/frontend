"use client";

import { motion } from "framer-motion";
import { PrimaryNavigationButton } from "../base/button";

interface CTAData {
    text: string;
    button: string;
}

const data: CTAData = {
    text: "اگر دنبال خرید هوشمندانه تر هستید، همین حالا نیاز خود را ثبت کنید.",
    button: "شروع",
};

export default function CTA() {
    return (
        <section className="flex justify-center md:p-20 px-5 py-10">
            <div className="flex flex-col items-center gap-10 text-center">
                <motion.section
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <p className="font-semibold text-3xl">{data.text}</p>
                </motion.section>

                <PrimaryNavigationButton
                    title={data.button}
                    href="/form"
                    className="w-[200px] sm:w-[300px]"
                />
            </div>
        </section>
    );
}
