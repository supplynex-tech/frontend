"use client";

import { PrimaryNavigationButton } from "@/components/base/button";

interface SectionListItem {
    title: string;
    text: string;
}

interface Section {
    title: string;
    description?: string;
    list?: (SectionListItem | string)[];
}

interface AboutData {
    title: string;
    intro: string;
    sections: Section[];
    button: { title: string; href: string };
}

const data: AboutData = {
    title: "درباره ما",
    intro:
        "SupplyNex به «خریدار هوشمند» شما تبدیل شده — تیم حرفه‌ای و دیجیتال که از ثبت نیاز تا تحویل نهایی همراهتان است.",
    sections: [
        {
            title: "ماموریت ما",
            description:
                "ما اینجا هستیم تا دنیای پرپیچ‌وخم خرید B2B را ساده، سریع و شفاف کنیم. باور داریم که انتخاب هوشمند یعنی خریدی امن، اقتصادی، با کیفیت قابل‌توجه و کاملاً پیگیری‌پذیر.",
        },
        {
            title: "چگونه کار می‌کنیم؟",
            list: [
                {
                    title: "ثبت نیاز با یک کلیک",
                    text: "فقط کافی‌ست بگویید چه می‌خواهید، با چه مشخصاتی و در چه زمانی نیاز دارید.",
                },
                {
                    title: "جست‌وجو و مذاکره هوشمندانه",
                    text: "هوش مصنوعی ما مثل یک تیم حرفه‌ای بازار را می‌گردد، با تأمین‌کنندگان مذاکره می‌کند و پیشنهادهای برتر را جمع‌آوری می‌کند.",
                },
                {
                    title: "انتخاب و تحویل نهایی",
                    text: "شما انتخاب می‌کنید؛ ما با پرداخت امن، کنترل کیفیت کالا، و اصالت، خرید را تا درب محل مدیریت می‌کنیم.",
                },
            ],
        },
        {
            title: "ارزش پیشنهادی ما",
            list: [
                "سرعت در تصمیم‌گیری: کاهش زمان فرایندها از روزها به ساعت‌ها",
                "هوش مصنوعی حرفه‌ای: مذاکره، مقایسه، رتبه‌بندی — با دانش و عملکرد دقیق",
                "امنیت کامل: در هر گام، از پرداخت تا تحویل، زیر نظر ما",
                "تجربه خرید مطمئن و به‌صرفه: کیفیت، سلامت تأمین، و آرامش خاطر",
            ],
        },
        {
            title: "چشم‌انداز آینده",
            description:
                "ما رسالت داریم تا با تکیه بر فناوری، هوش مصنوعی و شفافیت، جریان خریدهای سازمانی و کسب‌وکاری را به‌طور بنیادین تغییر دهیم. هدف ما؟ اینکه دیگر کسی نیاز نداشته باشد وقت و انرژی‌اش را صرف مذاکرات طولانی یا نگرانی از اینکه «آیا بهترین انتخاب را کرده‌ام؟» کند.",
        },
        {
            title: "دعوت نهایی",
            description:
                "حالا نیاز خود را ثبت کنید تا SupplyNex فرایند را برای‌تان متحول کند. اگر به دنبال خرید هوشمندانه‌تری هستید، همین حالا شروع کنید.",
        },
    ],
    button: { title: "شروع", href: "/dashboard" },
};

export default function About() {
    return (
        <section className="px-5 pt-50 pb-20 max-w-4xl mx-auto text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
            <p className="mb-6 justify-fa">{data.intro}</p>

            {data.sections.map((section, idx) => (
                <div key={idx} className="mb-8">
                    <h3 className="text-lg font-semibold mb-3">{section.title}</h3>

                    {section.description && (
                        <p className="mb-3 justify-fa">{section.description}</p>
                    )}

                    {section.list && (
                        <ul className="list-disc pr-6 space-y-2">
                            {section.list.map((item, index) =>
                                typeof item === "string" ? (
                                    <li key={index} className="justify-fa">{item}</li>
                                ) : (
                                    <li key={index} className="justify-fa">
                                        <strong>{item.title}:</strong> {item.text}
                                    </li>
                                )
                            )}
                        </ul>
                    )}
                </div>
            ))}

            <div className="flex justify-end pt-5">
                <PrimaryNavigationButton
                    title={data.button.title}
                    href={data.button.href}
                />
            </div>
        </section>
    );
}
