import InputBox from "./inputBox";
import {UseFormRegisterReturn} from "react-hook-form";

interface TextareaProps {
    label: string;
    placeholder?: string;
    register: UseFormRegisterReturn<any>;
};

export default function Textarea({
                                     label,
                                     register,
                                     placeholder = "",
                                 }: TextareaProps) {
    return (
        <InputBox label={label} name={register.name}>
            <textarea
                {...register}
                rows={5}
                placeholder={placeholder}
                className="w-full mt-2 border-2 placeholder-gray-400 border-gray-200 px-3 py-2 rounded-lg focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100"
            />
        </InputBox>
    );
}
