import { Leaf } from "lucide-react";
import Navbar from "./navbar";
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
      
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Dark overlay for better text visibility */}
      <div className="bg-black/40">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center space-y-8">
          <p className="flex items-center gap-2 border border-white/10 text-blue-300 bg-white/10 py-2 px-4 rounded-full font-poppins text-base">
            <Leaf className="text-blue-300 h-5 w-5" />
            Trusted by customers everywhere
          </p>
          <h1 className="max-w-4xl text-2xl md:text-5xl lg:text-6xl text-white font-bold font-montserrat leading-tight">
            Save Money Instantly at Your Favorite Local Shops.
          </h1>
          <p className="max-w-3xl text-lg md:text-2xl lg:text-2xl text-gray-300 font-poppins">
            Scan, save, and smile with instant discounts at your favorite stores.
            Redeem offers effortlessly with a quick QR code scan. Enjoy smooth,
            hassle-free savings every time you shop.
          </p>

          {/* Highlights Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all">
              <p className="text-4xl font-semibold text-blue-400 font-poppins">6788</p>
              <p className="text-xl text-white font-semibold font-poppins">Discounts</p>
              <p className="text-gray-300 font-poppins text-base">Offers</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all">
              <p className="text-4xl font-semibold text-blue-400 font-poppins">6788</p>
              <p className="text-xl text-white font-semibold font-poppins">Partnership</p>
              <p className="text-gray-300 font-poppins text-base">Brands</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all">
              <p className="text-4xl font-semibold text-blue-400 font-poppins">6788</p>
              <p className="text-xl text-white font-semibold font-poppins">Store</p>
              <p className="text-gray-300 font-poppins text-base">Locations</p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex items-center gap-5 mt-8">
            <button className="border border-white text-white text-lg font-medium rounded-full font-poppins py-3 px-8 hover:bg-white/10 transition">
              Explore now
            </button>
            <button className="bg-blue-900 text-white text-lg font-medium rounded-full font-poppins py-3 px-8 hover:bg-blue-800 transition">
              Download now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
