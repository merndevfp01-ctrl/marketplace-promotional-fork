import { BadgeIndianRupee, CheckCircle, Percent, UserRound } from 'lucide-react'
import React from 'react'

export default function Howitwork() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 text-white py-20">
        <div className="mx-auto max-w-6xl flex flex-col items-center text-center space-y-4 px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-montserrat">
            How It Works
          </h1>
          <h3 className="text-lg md:text-2xl text-gray-200 font-montserrat max-w-3xl">
            Follow these easy steps to redeem offers and enjoy smart savings effortlessly.
          </h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md hover:bg-white/20 transition">
              <div className="w-20 h-20 bg-blue-600/10 text-blue-400 rounded-full flex items-center justify-center mb-4">
                <UserRound className="w-10 h-10" />
              </div>
              <p className="text-xl font-poppins">Select the Vendor</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md hover:bg-white/20 transition">
              <div className="w-20 h-20 bg-yellow-600/10 text-yellow-400 rounded-full flex items-center justify-center mb-4">
                <BadgeIndianRupee className="w-10 h-10" />
              </div>
              <p className="text-xl font-poppins">Select Offers</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md hover:bg-white/20 transition">
              <div className="w-20 h-20 bg-green-600/10 text-green-400 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <p className="text-xl font-poppins">Vendor Approves</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md hover:bg-white/20 transition">
              <div className="w-20 h-20 bg-purple-600/10 text-purple-400 rounded-full flex items-center justify-center mb-4">
                <Percent className="w-10 h-10" />
              </div>
              <p className="text-xl font-poppins">Pay Less</p>
            </div>

          </div>
        </div>
      </div>
  )
}
