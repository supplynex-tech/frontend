
"use client";

import RegisterView from "../register/registerView";

export default function RegisterPage() {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-primary-50">
            <div className="flex flex-col bg-white shadow-md rounded-xl px-5 py-10 w-[400px]">
                <RegisterView />
            </div>
        </div>
    );
}
