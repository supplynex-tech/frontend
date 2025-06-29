"use client"

import Link from "next/link";
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
    const contactInfo = {
        description:
            'SupplyNex به "خریدار هوشمند" شما تبدیل شده — تیمی حرفه‌ای و دیجیتال که از ثبت نیاز تا تحویل نهایی همراهتان است.',
        address: "تهران، میرداماد، برج آرین، پلاک 232، طبقه 2، واحد 5",
        phone: "02122258309 - 09923403588 - 09192844533",
        email: "info@supplynex.ir",
    };

    const contactItems = [
        { label: "آدرس", value: contactInfo.address },
        { label: "تماس با ما", value: contactInfo.phone },
        { label: "ایمیل ما", value: contactInfo.email },
    ];

    const siteLinks = [
        { title: "درباره ما", href: "/about" },
        { title: "قوانین و مقررات", href: "/faq" },
        { title: "سوالات متداول", href: "/#questions" },
    ];

    const socialIcons = [
        { icon: FaInstagram, label: "اینستاگرام", href: "#", color: "hover:text-primary-300" },
        { icon: FaTwitter, label: "توییتر", href: "#", color: "hover:text-primary-300" },
        { icon: FaLinkedin, label: "لینکدین", href: "#", color: "hover:text-primary-300" },
    ];

    return (
        <footer className="bg-primary-700 text-gray-300 p-5 md:px-10 md:py-16 flex justify-center w-full">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 md:space-x-10 md:w-[80%]">
                <ul className="md:w-4/5">
                    <li className="pb-10 text-xl">{contactInfo.description}</li>
                    {contactItems.map((item, i) => (
                        <li key={i} className="pb-3">
                            <span className="font-bold pl-2">{item.label}:</span>
                            <span>{item.value}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-8 md:gap-12 justify-between md:w-1/5 relative md:pr-4">
                    <div className=" border-t md:border-r md:border-t-0 border-gray-300 md:pr-5">
                        <h4 className="mb-5 text-gray-300 hidden md:block">راهنمای سایت</h4>
                        <ul className="space-y-2 text-sm flex flex-row md:flex-col pt-5 md:pt-0 gap-10 md:gap-3">
                            {siteLinks.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-red transition cursor-pointer"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Icons */}
                {/* <div className="flex flex-row gap-4 text-xl mt-8 md:mt-0">
                    {socialIcons.map(({ icon: Icon, href, label, color }, i) => (
                        <Link key={i} href={href} aria-label={label}>
                            <Icon className={`cursor-pointer ${color}`} />
                        </Link>
                    ))}
                </div> */}
            </div>
        </footer>
    );
}
