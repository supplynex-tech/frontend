"use client";

import { motion } from "framer-motion";

interface Step {
    step: string;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        step: "1",
        title: "گام اول: ثبت درخواست خرید",
        description:
            "نیازتان را مشخص کنید. کالای مورد نظر یا خدمت مورد نیازتان را به سادگی ثبت کنید. فقط کافیست نوع، مقدار، و زمان مورد انتظار را وارد کنید.",
    },
    {
        step: "2",
        title: "گام دوم: دریافت پیشنهادات هوشمند",
        description:
            "ما جست‌وجو می‌کنیم، شما تصمیم می‌گیرید. هوش مصنوعی SupplyNex به‌صورت خودکار درخواست شما را بررسی می‌کند و فهرستی از تأمین‌کنندگان معتبر پیدا می‌کند، مذاکره می‌کند و پیش‌فاکتورهای رقابتی را ارائه می‌دهد.",
    },
    {
        step: "3",
        title: "گام سوم: انتخاب، پرداخت، پایان",
        description:
            "گزینه مناسب را انتخاب کرده و با خیال راحت پرداخت کنید. پس از انتخاب پیشنهاد دلخواه، پرداخت شما به‌صورت امن انجام می‌شود و سایر فرآیند تأمین توسط SupplyNex پیگیری خواهد شد.",
    },
];

export default function Instruction() {
    return (
        <section id="instructions" className="flex justify-center scroll-mt-35">
            <div className="bg-gray-50 lg:w-[90%] lg:rounded-3xl">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-15 px-5 py-10 md:p-20">
                    {steps.map((item, index) => (
                        <li key={item.step} className="flex flex-col">
                            {/* Step Number */}
                            <motion.section
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: index * 0.3,
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <h2 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-primary-700 to-gray-50">
                                    {item.step}
                                </h2>
                            </motion.section>

                            {/* Title & Description */}
                            <div>
                                <h3 className="text-xl font-semibold text-primary-700 pt-3 pb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
