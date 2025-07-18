import { useState, useEffect } from "react";
import InputBox from "./inputBox";
import { UseFormRegisterReturn } from "react-hook-form";

interface RadioProps {
  label: string;
  register: UseFormRegisterReturn<any>;
  multi?: boolean;
  options?: string[];
}

export default function Radio({ label, register, multi = true, options }: RadioProps) {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
      register.onChange({
        target: { value: selected, name: register.name },
      });
  }, [selected, multi]);

  const handleChange = (id: string) => {
    if (multi) {
      setSelected((prev) =>
          prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setSelected([id]);
    }
  };

  return (
      <InputBox label={label} name={register.name}>
        {/* Hidden input for RHF */}
        <input
            type="hidden"
            {...register}
            value={multi ? JSON.stringify(selected) : selected[0] || ""}
            readOnly
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 p-3">
          {options && options.map((option, index) => {
            const id = option;
            const isChecked = selected.includes(id);

            return (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                      type={multi ? "checkbox" : "radio"}
                      name={register.name}
                      value={option}
                      className="peer hidden"
                      checked={isChecked}
                      onChange={() => handleChange(id)}
                  />
                  <div
                      className={`w-4 h-4 border transition ${
                          isChecked ? "border-primary-300 bg-primary-300" : "border-gray-400"
                      } ${multi ? "rounded-sm" : "rounded-full"}`}
                  ></div>
                  <span className="ms-2 text-sm font-medium text-gray-600">{option}</span>
                </label>
            );
          })}
        </div>
      </InputBox>
  );
}
