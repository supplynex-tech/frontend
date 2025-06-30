import { useState } from "react";
import InputBox from "./inputBox";

const options = [
  { id: "option1", label: "حضوری" },
  { id: "option2", label: "آنلاین" },
];

type Props = {
  label: string;
  name: string;
  multi?: boolean;
};

export default function Radio({ label, name, multi = true }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (id: string) => {
    if (multi) {
      // حالت چندتایی: اضافه/حذف
      setSelected((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      // حالت تک‌انتخاب
      setSelected([id]);
    }
  };

  return (
    <InputBox label={label} name={name}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 p-3">
        {options.map((option) => {
          const isChecked = selected.includes(option.id);
          return (
            <label key={option.id} className="flex items-center cursor-pointer">
              <input
                type={multi ? "checkbox" : "radio"}
                name={multi ? `${name}-${option.id}` : name}
                className="peer hidden"
                checked={isChecked}
                onChange={() => handleChange(option.id)}
              />
              <div className={`w-4 h-4 border rounded-xl transition
                  ${isChecked ? "border-primary-300 bg-primary-300" : "border-gray-400"}
                  ${multi ? "rounded-sm" : "rounded-full"}
              `}></div>
              <span className="ms-2 text-sm font-medium text-gray-600">{option.label}</span>
            </label>
          );
        })}
      </div>
    </InputBox>
  );
}
