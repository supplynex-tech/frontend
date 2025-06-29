// components/form/BaseInput.tsx

export default function InputBox({ label, name, children }) {
    return (
        <div className="pt-6">
            <label htmlFor={name} className="block text-md font-medium text-gray-600 mb-2">
                {label}
            </label>

            {children}

        </div>
    );
}
