"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import timeImage from "@/../public/assets/images/time.png";
import shoppingImage from "@/../public/assets/images/shopping.png";
import securityImage from "@/../public/assets/images/security.png";
import professionalImage from "@/../public/assets/images/professional.png";

interface AdvantageItem {
    title: string;
    description: string;
    image: StaticImageData;
}

const advantages: AdvantageItem[] = [
    {
        title: "صرفه‌جویی در زمان",
        description:
            "با یک ثبت درخواست، به‌جای تماس با چندین تأمین‌کننده، تنها در چند ساعت فهرستی از پیشنهادهای آماده دریافت می‌کنید.",
        image: timeImage,
    },
    {
        title: "خرید هوشمند با هوش مصنوعی",
        description:
            "موتور هوش مصنوعی ما بازار را می‌گردد، مذاکره می‌کند و پیشنهادها را بر اساس فاکتورهایی مثل قیمت، سرعت تحویل، اعتبار تأمین‌کننده و اصالت کالا رتبه‌بندی می‌کند.",
        image: shoppingImage,
    },
    {
        title: "امنیت در پرداخت، اطمینان در ارسال",
        description:
            "پرداخت شما از مسیر امن و با نظارت SupplyNex انجام می‌شود. ما تا زمان تحویل و تأیید نهایی کنار شما هستیم.",
        image: securityImage,
    },
    {
        title: "انتخاب حرفه‌ای، نه فقط ارزان‌ترین",
        description:
            "بهترین خرید همیشه ارزان‌ترین نیست...! ما کمک می‌کنیم انتخابی داشته باشید که هم مطمئن باشد، هم باکیفیت، هم به‌صرفه.",
        image: professionalImage,
    },
];

export default function Advantage() {
    return (
        <section className="flex justify-center">
            <ul className="w-full md:w-[80%] py-5">
                {advantages.map((item, index) => {
                    const isReversed = index % 2 !== 0;
                    return (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <li
                                className={`p-5 grid grid-cols-1 lg:grid-cols-2 justify-center items-center z-10 relative ${isReversed ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                <div
                                    className={`flex justify-center ${isReversed ? "order-1 lg:order-2" : "order-1"
                                        }`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72"
                                    />
                                </div>
                                <div
                                    className={`md:px-5 ${isReversed ? "order-2 lg:order-1" : "order-2"
                                        }`}
                                >
                                    <h2 className="text-2xl text-primary-700 font-bold pb-4">
                                        {item.title}
                                    </h2>
                                    <p className="text-xl text-primary-700 pb-4 justify-fa">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        </motion.section>
                    );
                })}
            </ul>
        </section>
    );
}
