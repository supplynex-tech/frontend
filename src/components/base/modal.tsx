import { useRef } from "react";
import RegisterView from "../register/registerView";
import ResponseView from "../dashboard/responseView";
import { FaTimes } from "react-icons/fa";

export function Modal({
    onClose,
    children,
}: {
    onClose: () => void;
    children: React.ReactNode;
}) {
    const overlayRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    return (
        <div
            ref={overlayRef}
            onClick={handleClickOutside}
            className="fixed inset-0 z-50 bg-gray-900/50 flex items-center justify-center p-4"
        >
            <div className="relative bg-gray-50 shadow-md rounded-lg shadow-lg w-auto max-w-full p-6">
                {/* دکمه ضربدر بالا سمت راست */}
                <button
                    onClick={onClose}
                    className="absolute top-3 left-3 text-gray-500 hover:text-gray-700"
                    aria-label="بستن"
                >
                    <FaTimes className="w-5 h-5 text-gray-400 hover:text-gray-500 transition-colors duration-200" />
                </button>

                {children}
            </div>
        </div>
    );
}




export function RegisterModal({ onClose }: { onClose: () => void }) {

    return (
        <Modal onClose={onClose}>
                <RegisterView />
        </Modal>
    );
}

export function ResponseModal({ onClose }: { onClose: () => void }) {
    return (
        <Modal onClose={onClose}>
            <ResponseView />
        </Modal>
    );
}
