import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const card = [
    {
        image: "/vendor.png",
        heading: "Select the Vendor",
        description: "Browse or visit any partner store and choose the vendor from whom you want to avail a service or offer."
    },
    {
        image: "/coupon.png",
        heading: "Select Offers",
        description: "View the available discounts for that vendor and pick the offer that suits your needs."
    },
    {
        image: "/approve.jpeg",
        heading: "Vendor Approves",
        description: "The vendor reviews and approves the offer instantly to confirm the final payable amount."
    },
    {
        image: "/Payment.png",
        heading: "Pay Less",
        description: "Your discount is applied immediately — pay the reduced price and enjoy your savings."
    }
]

export default function Howwork() {
    return (
        <div id='work' className='scroll mx-auto container flex flex-col items-center text-center px-4'>
            <h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-montserrat">
                How It Works
            </h1>
            <p className="text-lg md:text-2xl text-gray-800 mb-10 font-poppins">
                Follow these easy steps to redeem offers and enjoy smart savings effortlessly.
            </p>
            <div className='space-y-4'>
                {card && card?.map((data, i) => (
                    <>
                        {/* First Card */}
                        <div className={`sticky top-0 w-full flex flex-col ${i % 2 === 0 ? "md:flex-row-reverse":"md:flex-row "} justify-center items-center border border-gray-200 rounded-2xl bg-gray-100  gap-10`}>
                            <div className='w-full md:w-1/2 relative bg-white rounded-2xl flex items-center justify-center'>
                                <Image
                                    src={"/mobile3.png"}
                                    height={400}
                                    width={400}
                                    className='w-92'
                                />
                                <div className='absolute top-8 right'>
                                    <Image
                                        src={data.image}
                                        height={127}
                                        width={127}
                                        alt=''
                                        className='rounded-2xl'
                                    />
                                </div>
                            </div>
                            <div className='w-full md:w-1/2 text-start space-y-2 p-4 md:p-10'>
                                <p className='text-lg bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-poppins'>
                                    Step-{i+1}
                                </p>
                                <h1 className='text-xl md:text-2xl font-semibold font-poppins'>
                                    {data.heading}
                                </h1>
                                <p className='text-normal md:text-xl text-gray-600 font-poppins'>
                                    {data.description}
                                </p>
                                <button className='flex items-center gap-2 text-sm md:text-md bg-blue-900 text-white rounded-lg py-2 px-6 font-poppins'>
                                    Get Started
                                    <ArrowRight className='h-5 w-5' />
                                </button>
                            </div>
                        </div>
                    </>
                ))}

                {/*Second Card */}
                {/* <div className='sticky top-0 w-full flex flex-col md:flex-row justify-center items-center border border-gray-200 rounded-2xl bg-gray-100  gap-10'>
                    <div className='w-full md:w-1/2 text-start space-y-2  p-10'>
                        <p className=' font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-poppins'>
                            Step-02
                        </p>
                        <h1 className='text-2xl font-semibold font-poppins'>
                            Select Offers
                        </h1>
                        <p className='text-xl text-gray-600 font-poppins'>
                            View the available discounts for that vendor and pick the offer that suits your needs.
                        </p>
                        <button className='flex items-center gap-2 text-md bg-blue-900 text-white rounded-lg py-2 px-6 font-poppins'>
                            Get Started
                            <ArrowRight className='h-5 w-5' />
                        </button>
                    </div>
                    <div className='w-full md:w-1/2 relative bg-white rounded-2xl flex items-center justify-center'>
                        <Image
                            src={"/mobile3.png"}
                            height={400}
                            width={402}
                            className='w-96'
                        />
                        <div className='absolute top-7 right'>
                            <Image
                                src={"/coupon.png"}
                                height={132}
                                width={134}
                                alt=''
                                className=' rounded-2xl'
                            />
                        </div>
                    </div>
                </div> */}
                {/* Third Card */}
                {/* <div className='sticky top-0 w-full flex flex-col md:flex-row justify-center items-center border border-gray-200 rounded-2xl bg-gray-100  gap-10'>
                    <div className='w-full md:w-1/2 relative bg-white rounded-2xl flex items-center justify-center'>
                        <Image
                            src={"/mobile3.png"}
                            height={400}
                            width={400}
                            className='w-96'
                        />
                        <div className='absolute top-8 right'>
                            <Image
                                src={"/approve.jpeg"}
                                height={135}
                                width={135}
                                alt=''
                                className=' rounded-2xl'
                            />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 text-start space-y-2 p-10'>
                        <p className=' font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-poppins'>
                            Step-03
                        </p>
                        <h1 className='text-2xl font-semibold font-poppins'>
                            Vendor Approves
                        </h1>
                        <p className='text-xl text-gray-600 font-poppins'>
                            The vendor reviews and approves the offer instantly to confirm the final payable amount.
                        </p>
                        <button className='flex items-center gap-2 text-md bg-blue-900 text-white rounded-lg py-2 px-6 font-poppins'>
                            Get Started
                            <ArrowRight className='h-5 w-5' />
                        </button>
                    </div>
                </div> */}
                {/* Forth Card */}
                {/* <div className='sticky top-0 w-full flex flex-col md:flex-row justify-center items-center border border-gray-200 rounded-2xl bg-gray-100  gap-10'>
                    <div className='w-full md:w-1/2 text-start space-y-2 p-10'>
                        <p className=' font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-poppins'>
                            Step-04
                        </p>
                        <h1 className='text-2xl font-semibold font-poppins'>
                            Pay Less
                        </h1>
                        <p className='text-xl text-gray-600 font-poppins'>
                            Your discount is applied immediately — pay the reduced price and enjoy your savings.
                        </p>
                        <button className='flex items-center gap-2 text-md bg-blue-900 text-white rounded-lg py-2 px-6 font-poppins'>
                            Get Started
                            <ArrowRight className='h-5 w-5' />
                        </button>
                    </div>
                    <div className='w-full md:w-1/2 relative bg-white rounded-2xl flex items-center justify-center'>
                        <Image
                            src={"/mobile3.png"}
                            height={400}
                            width={400}
                            className='w-96'
                        />
                        <div className='absolute top-8 right'>
                            <Image
                                src={"/payment.png"}
                                height={132}
                                width={132}
                                alt=''
                                className=' rounded-2xl'
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
