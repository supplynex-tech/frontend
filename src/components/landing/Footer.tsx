"use client";

import Link from "next/link";

interface ContactItem {
    label: string;
    value: string;
}

interface SiteLink {
    title: string;
    href: string;
}

const contactInfo = {
    description:
        'SupplyNex به "خریدار هوشمند" شما تبدیل شده — تیمی حرفه‌ای و دیجیتال که از ثبت نیاز تا تحویل نهایی همراهتان است.',
    address: "تهران، میرداماد، برج آرین، پلاک 232، طبقه 2، واحد 5",
    email: "info@supplynex.ir",
};

const contactItems: ContactItem[] = [
    { label: "آدرس", value: contactInfo.address },
    { label: "ایمیل ما", value: contactInfo.email },
];

const siteLinks: SiteLink[] = [
    { title: "درباره ما", href: "/about" },
    { title: "قوانین و مقررات", href: "/faq" },
    // { title: "نقشه سایت", href: "/sitemap.xml" },
    { title: "سوالات متداول", href: "/#questions" },
];

export default function Footer() {
    return (
        <footer className="bg-primary-700 text-gray-300 p-5 md:px-10 md:py-16 w-full flex justify-center">
            <div className="flex flex-col md:flex-row justify-between md:items-start md:w-[80%] space-y-10 md:space-y-0 md:space-x-10">
                <ul className="md:w-4/5">
                    <li className="pb-10 text-xl">{contactInfo.description}</li>
                    {contactItems.map((item, index) => (
                        <li key={index} className="pb-3">
                            <span className="font-bold pl-2">{item.label}:</span>
                            <span>{item.value}</span>
                        </li>
                    ))
                    }
                </ul>
                <div className="flex flex-wrap gap-8 md:gap-12 md:w-1/5 relative md:pr-4">
                    <div className="border-t w-full md:border-r md:border-t-0 border-gray-300 md:pr-5">
                        <h4 className="mb-5 text-gray-400 text-lg hidden md:block">راهنمای سایت</h4>
                        <ul className="flex flex-row justify-around md:flex-col gap-10 md:gap-3 text-sm pt-5 md:pt-0">
                            {siteLinks.map((link, index) => (
                                <li key={index}>
                                    {link.href.endsWith('.xml') ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-red transition cursor-pointer"
                                        >
                                            {link.title}
                                        </a>
                                    ) : (
                                        <Link href={link.href} className="hover:text-red transition cursor-pointer">
                                            {link.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    );
}
