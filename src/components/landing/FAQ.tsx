"use client";

import { useMemo } from "react";

interface RuleSection {
    title: string;
    body: string;
}

const rulesContent: RuleSection[] = [
    {
        title: "تاریخ آخرین بروزرسانی",
        body: "تکمیل شود",
    },
    {
        title: "مطالعه و پذیرش",
        body: "مطالعه و پذیرش مفاد زیر برای استفاده از پلتفرم الزامی است. استفاده از هر یک از خدمات SupplyNex به معنای پذیرش کامل این قوانین از سوی کاربر تلقی می‌گردد.",
    },
    {
        title: "۱. مقدمه و موضوع قرارداد",
        body: "پلتفرم SupplyNex با هدف تسهیل فرآیند خرید حرفه‌ای کالا و خدمات، امکان دریافت پیشنهاد قیمت از چندین تأمین‌کننده و انتخاب هوشمندانه را برای خریداران فراهم می‌کند. کلیه تعاملات در این پلتفرم تابع قوانین و مقررات جمهوری اسلامی ایران، قوانین تجارت الکترونیک، و این سند خواهد بود.",
    },
    {
        title: "۲. تعاریف",
        body: `
• پلتفرم: سامانه‌ای تحت مالکیت [نام حقوقی شرکت] که فرآیند درخواست خرید، دریافت پیشنهاد، انتخاب تأمین‌کننده و پرداخت را به صورت متمرکز مدیریت می‌کند.
• خریدار: شخص حقیقی یا حقوقی ثبت‌نام‌کننده در پلتفرم جهت ثبت درخواست خرید کالا یا خدمات.
• تأمین‌کننده: شخص حقیقی یا حقوقی ارائه‌دهنده پیشنهاد قیمت برای درخواست‌های ثبت‌شده.
• درخواست خرید: نیاز ثبت‌شده توسط خریدار که به صورت عمومی یا خصوصی در پلتفرم منتشر می‌شود.
• پیشنهاد قیمت: اطلاعات ارسال‌شده توسط تأمین‌کننده در پاسخ به درخواست، شامل شرایط فروش، مشخصات کالا یا خدمت، قیمت، نحوه ارسال و سایر جزئیات.
`,
    },
    {
        title: "۳. شرایط عضویت و احراز هویت",
        body: "کاربران موظف‌اند اطلاعات هویتی و ثبت‌نامی خود را به‌صورت صحیح وارد کنند. در صورت ارائه اطلاعات نادرست، پلتفرم مجاز است حساب کاربری را تعلیق یا مسدود نماید. تأمین‌کنندگان باید دارای مجوزهای قانونی لازم برای عرضه کالا یا خدمات باشند. احراز هویت شامل: شماره ملی/شناسه ملی، آدرس دقیق، شماره حساب بانکی معتبر، شماره تماس و سایر اطلاعات تکمیلی خواهد بود.",
    },
    {
        title: "۴. محدوده مسئولیت پلتفرم",
        body: `SupplyNex صرفاً بستر ارتباط بین خریداران و تأمین‌کنندگان است و نسبت به کیفیت کالا، زمان تحویل، خدمات پس از فروش، قیمت‌گذاری، یا تحقق وعده‌های طرفین هیچگونه مسئولیتی ندارد. صحت، اعتبار و قانونی بودن کالا یا خدمات ارائه‌شده توسط تأمین‌کنندگان، بر عهده خود آن‌هاست.`,
    },
    {
        title: "۵. مالکیت فکری",
        body: "تمامی محتوا، نام‌ها، لوگوها، طراحی‌ها، داده‌ها، نرم‌افزارها و کدهای مرتبط با پلتفرم متعلق به شرکت [نام شرکت] است. استفاده غیرمجاز از آن ممنوع است و پیگرد قانونی دارد.",
    },
    {
        title: "۶. حریم خصوصی و امنیت اطلاعات",
        body: "پلتفرم متعهد به حفاظت از اطلاعات کاربران است. اطلاعات صرفاً در راستای خدمات ارائه‌شده استفاده می‌شود و به اشخاص ثالث منتقل نمی‌گردد مگر در موارد الزام قانونی. اطلاعات تراکنش‌ها از طریق درگاه‌های بانکی رسمی و با رعایت پروتکل‌های امنیتی منتقل می‌شود.",
    },
    {
        title: "۷. ضوابط ثبت درخواست و پیشنهاد",
        body: "هر کاربر تنها مجاز به ثبت درخواست یا ارسال پیشنهاد مطابق با واقعیت، اطلاعات دقیق و بدون فریب طرف مقابل است. تأمین‌کننده موظف است قوانین مالیاتی را رعایت کرده و در صورت نیاز فاکتور معتبر ارائه دهد. ارسال پیشنهادهای تکراری، غیرواقعی یا دستکاری‌شده منجر به مسدودسازی حساب خواهد شد.",
    },
    {
        title: "۸. پرداخت، تسویه و ضمانت معاملات",
        body: "پرداخت‌ها تنها از طریق سیستم پرداخت امن پلتفرم انجام می‌شود. پرداخت مستقیم خارج از سیستم موجب سلب مسئولیت پلتفرم خواهد شد. تسویه با تأمین‌کننده پس از تأیید نهایی تحویل کالا/خدمت توسط خریدار و طبق زمان‌بندی توافق‌شده انجام می‌گیرد. در صورت بروز اختلاف، مبلغ نزد پلتفرم مسدود می‌ماند تا تعیین تکلیف قضایی یا توافق طرفین.",
    },
];

export default function Rules() {

    return (
        <section className="px-5 pt-50 pb-20 max-w-4xl mx-auto text-gray-800 leading-relaxed">
            {rulesContent.map((section, index) => (
                <div key={index} className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                    <p className="whitespace-pre-line">{section.body}</p>
                </div>
            ))}
        </section>
    );
}
