"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Questions() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const data = [
        {
            title: "SupplyNex دقیقا چه کاری انجام می‌دهد؟",
            content: "SupplyNex مثل یک خریدار حرفه‌ای باهوش عمل می‌کند. ما با استفاده از هوش مصنوعی نیاز خرید شما را تحلیل می‌کنیم، بین صدها تأمین‌کننده می‌گردیم، مذاکره می‌کنیم و بهترین پیشنهادها را از نظر قیمت، کیفیت، اصالت کالا و امنیت پرداخت به شما ارائه می‌دهیم.",
        },
        {
            title: "آیا SupplyNex خودش کالا می‌فروشد یا فقط واسطه است؟",
            content: "خیر، ما فروشنده نیستیم. SupplyNex یک پلتفرم واسطه است که فرآیند انتخاب تأمین‌کننده مناسب را برای شما ساده، سریع و امن می‌کند.",
        },
        {
            title: "آیا استفاده از پلتفرم هزینه دارد؟",
            content: "ثبت‌نام و ارسال درخواست خرید در SupplyNex کاملاً رایگان است.",
        },
        {
            title: "چه نوع کالاهایی از طریق SupplyNex قابل خرید هستند؟",
            content: "تقریباً همه‌ی اقلام مورد نیاز کسب‌وکارها. شما نوع و مقدار کالا را ثبت می‌کنید و پیشنهاد دریافت می‌کنید.",
        },
        {
            title: "پیشنهادها چطور از تأمین‌کننده‌ها جمع می‌شوند؟",
            content: "هوش مصنوعی SupplyNex درخواست شما را برای تأمین‌کننده‌های مرتبط ارسال می‌کند، اطلاعات را جمع‌آوری، تحلیل و رتبه‌بندی می‌کند و فقط بهترین گزینه‌ها را به شما نمایش می‌دهد. هر پیشنهاد شامل قیمت، زمان تحویل، شرایط پرداخت و اعتبار تأمین‌کننده است.",
        },
        {
            title: "اگر کالا یا خدمت مشکل داشت چه می‌شود؟",
            content: "ما تیم داوری و پشتیبانی داریم. در صورت وجود مشکل در تحویل، کیفیت یا اصالت کالا، مبلغ شما تا زمان حل مشکل مسدود باقی می‌ماند و تیم پشتیبانی پیگیری خواهد کرد.",
        },
        {
            title: "آیا اطلاعات من نزد SupplyNex محفوظ می‌ماند؟",
            content: "بله، امنیت اطلاعات برای ما اولویت اول است. اطلاعات شما فقط برای ارائه خدمات بهتر استفاده می‌شود و به هیچ شخص ثالثی منتقل نمی‌گردد مگر با حکم قانونی.",
        },
    ];

    return (
        <section id="questions" className="bg-gray-50 w-[100%] scroll-mt-25">
            <div className="mx-auto md:w-[80%] p-5 md:py-20 md:px-0">
                {data.map((item, index) => {
                    const isOpen = openIndex === index;
                    const isLast = index === data.length - 1;

                    return (
                        <section
                            key={index}
                            className={`${!isLast ? "border-b border-gray-300" : ""}`}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full py-4 flex justify-between items-center text-right text-primary-700 text-xl"
                            >
                                <p>{item.title}</p>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="py-3 text-primary-700 leading-relaxed">
                                            {item.content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </section>
                    );
                })}

            </div>
        </section>
    );
}
