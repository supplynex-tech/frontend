'use client'

export default function DashboardWrapper({ children }) {
    return (
        <div className="w-screen h-screen relative">
            <div className="w-full h-2/5 bg-linear-to-r/hsl from-primary-700 to-gray-900 absolute z-0 top-0"></div>
            <div className="relative z-10 p-5 md:p-10">
                <div className="bg-gray-50 shadow-md rounded-xl p-5 md:p-10 h-[calc(100vh-2.5rem)] w-[calc(100vw-2.5rem)] md:h-[calc(100vh-5rem)] md:w-[calc(100vw-5rem)] overflow-y-auto scrollbar-rounded">
                    {children}
                </div>
            </div>
        </div >
    )
}