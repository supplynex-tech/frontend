import Image from "next/image";
import userImage from "@/../public/assets/images/user.png";

const userData = {
    text: { name: "علی عزیز", message: "خوش آمدی." },
    phone: { title: "شماره همراه", number: "09337827049" },
    stats: [
        {
            count: 4,
            label: "همه ی فرم ها",
            color: "primary-400",
        },
        {
            count: 2,
            label: "در حال بررسی",
            color: "secondary-500",
        },
        {
            count: 2,
            label: "بررسی شده",
            color: "emerald-600",
        },
    ],
};

//   const total = formData.length;
//   const reviewed = formData.filter((f) => f.status === "بررسی شده").length;
//   const reviewing = formData.filter((f) => f.status === "در حال بررسی").length;


export default function Profile() {
    return (
        <section className="flex flex-col items-center rounded-xl max-w-md mx-auto">
            <Image
                src={userImage}
                alt="عکس کاربر"
                className="h-20 w-20"
            />
            <div className="text-center pt-5">
                <p className="text-primary-700 text-xl font-semibold mb-3">
                    {userData.text.name} {userData.text.message}
                </p>
                <span className="text-gray-600 text-md">{userData.phone.title}: {userData.phone.number}</span>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5 w-full">
                {userData.stats.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center bg-gray-50 border-l-4 border-${item.color} rounded-lg py-3 shadow-sm`}
                    >
                        <span className={`text-${item.color} text-xl font-bold`}>{item.count}</span>
                        <span className="text-xs text-gray-600">{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
