import { Calculator, Eye, MapPin, Sparkles, Store, Zap } from 'lucide-react'
import React from 'react'

export default function Features() {
    return (
        <div className="mx-auto max-w-6xl flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-montserrat">
                    Smart Features Designed for Effortless Savings
                </h1>
                <p className="text-lg md:text-2xl text-gray-700 mb-10 font-montserrat">Simple tools, transparent offers, and smooth redemption that put customers first.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                <div className="hover:bg-gray-100 flex flex-col justify-center items-start gap-2 border border-gray-200 rounded-lg p-8">
                    <div className="bg-blue-600/5 rounded-lg p-2">
                        <Eye className="h-8 w-8 text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-semibold">Transparent Savings</h3>
                    <p className="text-xl text-gray-700 font-poppins">See exactly how much you save before you pay. No hidden conditions, no confusion.</p>
                </div>
                <div className="hover:bg-gray-100 flex flex-col justify-center items-start gap-2 border border-gray-200 rounded-lg p-8">
                    <div className="bg-blue-600/5 rounded-lg p-2">
                        <Store className="h-8 w-8 text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-semibold">Multi-Vendor Access</h3>
                    <p className="text-xl text-gray-700 font-poppins">Use your offers across a wide range of local shops, services, and businesses near you.</p>
                </div>
                <div className="hover:bg-gray-100 flex flex-col justify-center items-start gap-2 border border-gray-200 rounded-lg p-8">
                    <div className="bg-blue-600/5 rounded-lg p-2">
                        <Calculator className="h-8 w-8 text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-semibold">Real-Time Discount Calculation</h3>
                    <p className="text-xl text-gray-700 font-poppins">Instantly view bill amount, offer applied, and final payable price — all in real time.</p>
                </div>
                <div className="hover:bg-gray-100 flex flex-col justify-center items-start gap-2 border border-gray-200 rounded-lg p-8">
                    <div className="bg-blue-600/5 rounded-lg p-2">
                        <Zap className="h-8 w-8 text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-semibold">Hassle-Free Experience</h3>
                    <p className="text-xl text-gray-700 font-poppins">No long processes, no complicated steps. Just scan, save, and enjoy your service.</p>
                </div>
                <div className="hover:bg-gray-100 flex flex-col justify-center items-start gap-2 border border-gray-200 rounded-lg p-8">
                    <div className="bg-blue-600/5 rounded-lg p-2">
                        <MapPin className="h-8 w-8 text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-semibold">Smart Local Deals</h3>
                    <p className="text-xl text-gray-700 font-poppins">Discover offers from vendors around you and pick the best savings for your needs.</p>
                </div>
                <div className="hover:bg-gray-100 flex flex-col justify-center items-start gap-2 border border-gray-200 rounded-lg p-8">
                    <div className="bg-blue-600/5 rounded-lg p-2">
                        <Sparkles className="h-8 w-8 text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-semibold">Works on Everyday Services</h3>
                    <p className="text-xl text-gray-700 font-poppins">Redeem offers at salons, spas, cafés, gyms, repair shops, and many more categories.</p>
                </div>
            </div>
        </div>
    )
}
