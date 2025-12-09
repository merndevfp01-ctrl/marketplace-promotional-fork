import { CheckCircle, Leaf, Trophy } from "lucide-react";
import Navbar from "./navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative w-full bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Dark overlay */}
      <div className="bg-black/40 container min-h-screen w-full flex flex-col md:flex-row justify-center items-center mx-auto">

        {/* Left */}
        <div className="w-full md:w-1/2 px-4 md:px-6 pt-36 pb-20 space-y-6 md:space-y-8 text-center md:text-left">
          
          <p className="mx-auto md:mx-0 w-72 md:w-80 flex items-center justify-center gap-2 border border-white/10 text-blue-300 bg-white/10 py-2 px-4 rounded-full font-poppins text-sm md:text-base">
            <Leaf className="text-blue-300 h-5 w-5" />
            Trusted by customers everywhere
          </p>

          <h1 className="max-w-4xl mx-auto md:mx-0 text-3xl md:text-5xl lg:text-5xl text-white font-bold font-montserrat leading-tight">
            Save More at Your Favorite Shops.
          </h1>

          <p className="max-w-2xl mx-auto md:mx-0 text-base md:text-xl text-gray-300 font-poppins">
            Scan, save, and smile with instant discounts at your favorite stores.
            Redeem offers effortlessly with a quick QR code scan. Enjoy smooth,
            hassle-free savings every time you shop.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4">
            <Link
              href="/"
              className="bg-white flex items-center rounded-md gap-2 py-2 px-4 w-60 md:w-auto justify-center"
            >
              <FaGooglePlay className="text-black h-8 w-8 md:h-10 md:w-10" />
              <div className="text-black">
                <p className="text-xs">GET IT ON</p>
                <p className="text-xl md:text-2xl font-bold">Google Play</p>
              </div>
            </Link>

            <Link
              href="/"
              className="bg-white flex items-center rounded-md gap-2 py-2 px-4 w-60 md:w-auto justify-center"
            >
              <FaApple className="text-black h-10 w-10 md:h-12 md:w-12" />
              <div className="text-black">
                <p className="text-xs">Download on the</p>
                <p className="text-xl md:text-2xl font-bold">App Store</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center items-center pt-10 md:pt-32 pb-20">

          <div className="relative border border-blue-400 h-72 w-72 sm:h-80 sm:w-80 md:h-80 md:w-80 rounded-2xl p-6 md:p-10">

            {/* Mobile frame */}
            <div className="absolute z-50 bottom-35 left-28 sm:bottom-20 sm:left-28 md:bottom-30 md:left-40 h-60 w-60 sm:h-72 sm:w-72 rounded-2xl">
              <div className="relative">
                <Image
                  src={"/mobile3.png"}
                  height={400}
                  width={380}
                  alt=""
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-5 sm:top-6 left-19 sm:left-20">
                  <Image
                    src={"/vendor.png"}
                    height={200}
                    width={200}
                    alt=""
                    className="w-21.5 sm:w-32 rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Avatars */}
            <div className="absolute top-58 sm:top-60 md:top-65 left-50 sm:left-44 md:left-60 z-50 bg-white/90 border-blue-400 rounded-2xl flex flex-col justify-center items-center text-center p-2 w-32 sm:w-40">
              <Image
                src={"/avtars.png"}
                height={400}
                width={400}
                className="h-10 sm:h-14 w-24 sm:w-28"
              />
              <h3 className="text-sm sm:text-base md:text-lg font-poppins">100k+</h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-poppins">
                SATISFIED USERS
              </p>
            </div>

            {/* Approval */}
            <div className="absolute -bottom-10 sm:bottom-10 right-50 sm:right-40 md:right-60 z-50 bg-white/90 text-center rounded-2xl p-2 md:p-4 flex flex-col items-center w-36 sm:w-48 space-y-1">
              <CheckCircle className="text-green-600 h-6 w-6 md:h-8 md:w-8" />
              <h3 className="text-sm md:text-base font-poppins">INSTANT APPROVAL</h3>
              <p className="text-xs md:text-sm text-gray-600 font-poppins">
                with in 3-5 seconds
              </p>
            </div>

            {/* #1 card */}
            <div className="absolute bottom-60 sm:bottom-56 md:bottom-65 right-50 sm:right-32 md:right-55 z-50 bg-white/90 text-center rounded-2xl p-2 md:p-4 w-36 sm:w-44">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={"/trophy.png"}
                  height={100}
                  width={100}
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
                <h3 className="text-lg sm:text-xl font-poppins">#1</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-poppins">
                Platform for Local Savings
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
