import { Calculator, Eye, MapPin, Sparkles, Store, Zap } from 'lucide-react'
import React, { forwardRef } from 'react'

const feature = [
    {
        icon: <Eye />,
        heading: "Transparent Savings",
        description: "See exactly how much you save before you pay. No hidden conditions, no confusion."
    },
    {
        icon: <Store />,
        heading: "Multi-Vendor Access",
        description: "Use your offers across a wide range of local shops, services, and businesses near you."
    },
    {
        icon: <Calculator />,
        heading: "Real-Time Discount Calculation",
        description: "Instantly view bill amount, offer applied, and final payable price — all in real time."
    },
    {
        icon: <Zap />,
        heading: "Hassle-Free Experience",
        description: "No long processes, no complicated steps. Just scan, save, and enjoy your service."
    },
    {
        icon: <MapPin />,
        heading: "Smart Local Deals",
        description: "Discover offers from vendors around you and pick the best savings for your needs."
    }
    , {
        icon: <Sparkles />,
        heading: "Works on Everyday Services",
        description: "Redeem offers at salons, cafés, gyms, repair shops, and many more categories."
    }
]

const Features = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="scroll-mt-20 mx-auto container flex flex-col justify-center items-center px-4 md:px-0">
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-montserrat">
                    Smart Features for Easy Savings
                </h1>
                <p className="text-lg md:text-2xl text-gray-700 mt-2 font-poppins">
                    Simple tools, transparent offers, and smooth redemption that put customers first.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 mt-10">
                {feature && feature?.map((data) => (
                    <div className="hover:bg-gray-100 flex flex-col items-start gap-2 border border-gray-200 rounded-lg p-4 md:p-8">
                        <div className="bg-blue-600/5 rounded-lg  text-blue-900 p-2">
                            {data.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-normal font-poppins">{data.heading}</h3>
                        <p className="text-normal md:text-lg text-gray-700 font-poppins">{data.description}</p>
                        {/* Divider */}
                        <div className="w-12 h-1 bg-blue-900 rounded-full mt-2"></div>
                    </div>
                ))}
            </div>
        </div>
    )
})

export default Features
