import React from 'react'

export default function Workwithus() {
    return (
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-center py-16 px-4">

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-montserrat">
                Work With Us
            </h1>

            <p className="max-w-3xl text-lg md:text-2xl text-center text-gray-600 mt-4 mb-12 font-poppins">
                Partner with us as a Vendor or Sales Partner — fill in your details and we’ll reach out soon.
            </p>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full">

                {/* Left Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-5xl text-gray-800 font-bold font-montserrat">
                        Join Us — Apply Now
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 mt-4 font-poppins">
                        Simply fill out the form below and choose your preferred role.  
                        Our team will get in touch within 24–48 hours.
                    </p>
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 border border-gray-200 rounded-3xl p-8 shadow-sm space-y-5 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Join As */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="text-lg font-poppins font-medium mb-2 block">
                                I want to join as*
                            </label>

                            <div className="flex flex-col sm:flex-row gap-5">
                                {/* Vendor */}
                                <label className="w-full cursor-pointer flex items-center gap-4 border border-gray-300 hover:border-blue-500 transition rounded-2xl p-4">
                                    <input
                                        type="radio"
                                        name="position"
                                        className="accent-blue-700 font-poppins w-5 h-5"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold font-poppins">Vendor</p>
                                        <p className="text-gray-500 text-sm font-poppins">Grow my business</p>
                                    </div>
                                </label>

                                {/* Sales */}
                                <label className="w-full cursor-pointer flex items-center gap-4 border border-gray-300 hover:border-blue-500 transition rounded-2xl p-4">
                                    <input
                                        type="radio"
                                        name="position"
                                        className="accent-blue-700 font-poppins w-5 h-5"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold font-poppins">Sales</p>
                                        <p className="text-gray-500 text-sm font-poppins">Build my career</p>
                                    </div>
                                </label>

                            </div>
                        </div>

                        {/* Inputs */}
                        <div className="flex flex-col">
                            <label className="font-medium font-poppins">First name</label>
                            <input
                                type="text"
                                placeholder="Enter first name"
                                className="border border-gray-300 rounded-xl p-3 mt-1 outline-none transition font-poppins"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium font-poppins">Last name</label>
                            <input
                                type="text"
                                placeholder="Enter last name"
                                className="border border-gray-300 rounded-xl p-3 mt-1 outline-none transition font-poppins"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium font-poppins">Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="border border-gray-300 rounded-xl p-3 mt-1 outline-none transition font-poppins"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-medium font-poppins">Phone</label>
                            <input
                                type="text"
                                placeholder="Enter phone"
                                className="border border-gray-300 rounded-xl p-3 mt-1 outline-none transition font-poppins"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className='font-medium font-poppins'>Message</label>
                        <textarea className="border border-gray-300 rounded-xl p-2"></textarea>
                    </div>
                    <button className='w-full bg-blue-900 text-white p-3 rounded-xl font-poppins'>
                        Submit
                    </button>
                </div>
            </div>

        </div>
    );
}
