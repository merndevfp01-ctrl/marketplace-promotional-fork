"use client";
import { useState } from "react";
import { UserRound, ChevronLeft, ChevronRight } from "lucide-react";
import { National_Park } from "next/font/google";

const nationalpark = National_Park({
    subsets: ['latin']
})

const card = [
    {
        name: "Sarah Mitchell",
        place: "Jaipur, Rajasthan",
        description:
            "I've saved over $300 in just two months! The QR code system is so easy to use. I scan at checkout and boom - instant discount. Love it!",
    },
    {
        name: "James Rodriguez",
        place: "Jaipur, Rajasthan",
        description:
            "The entire experience is smooth. Redeeming discounts takes literally 2 seconds. Highly recommended!",
    },
    {
        name: "Emily Chen",
        place: "Jaipur, Rajasthan",
        description:
            "Such a helpful platform! Saves me time AND money. The cashback and QR discount combo is amazing.",
    },
    {
        name: "Michael Thompson",
        place: "Jaipur, Rajasthan",
        description:
            "Super easy to use! I’ve recommended it to all my friends and family. The discounts are real!",
    },
    {
        name: "David Park",
        place: "Jaipur, Rajasthan",
        description:
            "A very intuitive and helpful discount platform. Works smoothly everywhere!",
    },
    {
        name: "Jhon Doe",
        place: "Jaipur, Rajasthan",
        description:
            "A very intuitive and helpful discount platform. Works smoothly everywhere!",
    }
];

export default function TrustedClientsSection() {
    const [index, setIndex] = useState(0);

    const visibleCards = 3;
    const maxIndex = card.length - visibleCards;

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    };

    return (
        <div className="w-full">
            <div className="mx-auto max-w-6xl flex flex-col items-center text-center">
                <h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-montserrat">What Our Customer Says</h1>
                <p className={`text-lg md:text-2xl text-gray-700 mb-10 font-poppins`}>
                    Real people, real savings, real reviews
                </p>

                <div className="relative w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}
                    >
                        {card && card?.map((data, i) => (
                            <div
                                key={i}
                                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 py-6"
                            >
                                <div className="border border-gray-200 bg-gray-100 rounded-2xl p-6 text-left space-y-4 h-full">
                                    <div className="w-12 h-12 bg-blue-500/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-white/20">
                                        <UserRound className="text-blue-700 h-6 w-6" />
                                    </div>

                                    <p className="text-xl text-gray-700 font-poppins">
                                        {data.description}
                                    </p>

                                    <div>
                                        <h3 className="text-xl font-semibold font-poppins">{data.name}</h3>
                                        <p className="text-normal text-gray-500 font-poppins">{data.place}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/*BUTTONS */}
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
                        >
                            <ChevronLeft className="text-gray-700" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
                        >
                            <ChevronRight className="text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
