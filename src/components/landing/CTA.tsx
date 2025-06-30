"use client"

import { motion } from "framer-motion";
import { PrimaryNavigationButton } from "../base/button";

const data = {
    text: "اگر دنبال خرید هوشمندانه تر هستید، همین حالا نیاز خود را ثبت کنید.",
    button: { title: 'شروع', href: '/form' },
}


export default function CTA() {
    return (
        <section className="flex justify-center md:p-20 px-5 py-10">
            <div className="flex flex-col items-center gap-10">
                <motion.section
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <p className="font-semibold text-3xl">
                        {data.text}
                    </p>
                </motion.section>
                <div className="w-[50%]">
                    <PrimaryNavigationButton title={data.button.title} href={data.button.href} />
                </div>
            </div>
        </section>
    );
}
