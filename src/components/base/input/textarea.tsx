// components/form/BaseInput.tsx

import InputBox from "./inputBox";

type BaseInputProps = {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textarea?: boolean;
    required?: boolean;
};

export default function Textarea({
    label,
    name,
    placeholder = "",
    value,
    onChange,
    required = false,
}: BaseInputProps) {
    return (
        <InputBox label={label} name={name}>
            <textarea
                id={name}
                name={name}
                rows={5}
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full mt-2 border-2 placeholder-gray-400 border-gray-200 px-3 py-2 rounded-lg focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100"
            />
        </InputBox>
    );
}
