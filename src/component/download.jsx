import Image from 'next/image'
import Link from 'next/link'
import React, { forwardRef } from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

const Download = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="mx-auto container bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 text-white rounded-3xl overflow-hidden p-6 md:p-0 flex flex-col md:flex-row items-center gap-12">
            <div className="relative flex justify-center md:justify-center w-full md:w-auto">
                <Image
                    src="/mobile3.png"
                    width={430}
                    height={430}
                    alt="Mobile App"
                    className="w-50 sm:w-64 md:w-80 lg:w-[432px] drop-shadow-2xl transition-all"
                />
                <div className="absolute top-4 sm:top-6 md:top-9 left-39 sm:left-62 md:left-24 lg:left-34.5 transition-all">
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
            <div className="text-center md:text-right w-full md:w-1/2 space-y-5 md:space-y-7">

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat leading-snug">
                    Your Smart Savings Companion — Always With You
                </h1>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl font-montserrat max-w-xl ml-auto">
                    Scan offers, redeem discounts, and save money instantly — right from your phone.
                </p>

                <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-4 font-poppins pt-2">

                    {/* Google Play */}
                    <Link
                        href="/"
                        className="bg-white hover:bg-gray-100 transition flex items-center rounded-lg gap-3 py-3 px-5 w-full sm:w-64 justify-center shadow-sm"
                    >
                        <FaGooglePlay className="text-black h-7 w-7 sm:h-9 sm:w-9" />
                        <div className="text-black text-left">
                            <p className="text-xs tracking-wide">GET IT ON</p>
                            <p className="text-lg sm:text-xl font-semibold">Google Play</p>
                        </div>
                    </Link>

                    {/* App Store */}
                    <Link
                        href="/"
                        className="bg-white hover:bg-gray-100 transition flex items-center rounded-lg gap-3 py-3 px-5 w-full sm:w-64 justify-center shadow-sm"
                    >
                        <FaApple className="text-black h-8 w-8 sm:h-10 sm:w-10" />
                        <div className="text-black text-left">
                            <p className="text-xs tracking-wide">Download on the</p>
                            <p className="text-lg sm:text-xl font-semibold">App Store</p>
                        </div>
                    </Link>

                </div>
            </div>

        </div>
    )
})

export default Download
