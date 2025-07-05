"use client";

interface Option {
    id: string;
    label: string;
}

const options: Option[] = [
    { id: "option1", label: "انتخاب اول" },
    { id: "option2", label: "انتخاب دوم" },
    { id: "option3", label: "انتخاب سوم" },
];

export default function Radio() {
    const isMulti = options.length > 2;

    return (
        <div className="pt-6">
            <label className="block text-md font-medium text-gray-600 mb-2">
                انتخاب کن
            </label>

            <div
                className={`grid gap-3 sm:gap-12 p-3 ${isMulti ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1"
                    }`}
            >
                {options.map((option) => (
                    <label
                        key={option.id}
                        htmlFor={option.id}
                        className="flex items-center cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="colored-radio"
                            id={option.id}
                            className="peer hidden"
                        />
                        <div className="w-4 h-4 rounded-full border border-gray-400 peer-checked:border-primary-500 peer-checked:bg-primary-500 transition"></div>
                        <span className="ms-2 text-sm font-medium text-gray-600">
                            {option.label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}
