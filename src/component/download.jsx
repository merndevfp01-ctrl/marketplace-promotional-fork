import Image from 'next/image'
import React from 'react'

export default function Download() {
    return (
        <div className="mx-auto max-w-6xl bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 text-white rounded-3xl overflow-hidden p-6 sm:p-10 md:p-12 
                        flex flex-col md:flex-row items-center md:items-end gap-12">

            {/* Mobile Image Container */}
            <div className="relative flex justify-center md:justify-start w-full md:w-auto">

                {/* Main Mobile Image */}
                <Image
                    src="/mobile3.png"
                    width={430}
                    height={430}
                    alt="Mobile App"
                    className="w-50 sm:w-64 md:w-80 lg:w-[432px] drop-shadow-2xl transition-all"
                />

                {/* Floating Frame */}
                <div className="
                    absolute 
                    top-4 sm:top-6 md:top-9
                    left-39 sm:left-62 md:left-24 lg:left-34.5  
                    transition-all
                ">
                    <Image
                        src="/frame.png"
                        width={160}
                        height={160}
                        alt="Floating frame"
                        className="w-18 sm:w-22.5 md:w-28 lg:w-[155px] rounded-xl shadow-xl"
                    />
                </div>
            </div>

            {/* Right Section Text */}
            <div className="text-center md:text-right w-full md:w-1/2 space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug font-montserrat">
                    Your Smart Savings Companion — Always With You
                </h1>

                <p className="text-gray-300 text-lg sm:text-xl font-montserrat">
                    Scan offers, redeem discounts, and save money instantly — right from your phone.
                </p>

                <div className="flex md:justify-end justify-center">
                    <button className="border border-white text-lg rounded-full py-3 px-8 mt-3 font-medium hover:bg-white hover:text-blue-900 transition">
                        Download now
                    </button>
                </div>
            </div>

        </div>
    )
}
