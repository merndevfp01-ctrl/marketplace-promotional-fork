"use client";
import Image from "next/image";

const card = [
  {
    name: "Sarah Mitchell",
    place: "Jaipur, Rajasthan",
    description:
      "I've saved over $300 in just two months! The QR code system is so easy to use. I scan at checkout and boom - instant discount.",
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
  return (
    <section className="w-full px-5 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-b from-blue-950 via-blue-900 to-gray-900 bg-clip-text text-transparent font-montserrat">
            What Our Customers Say
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-10 font-poppins">
            Real people, real savings, real experiences
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {card.map((data, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl md:p-7 flex flex-col gap-6 shadow-sm hover:shadow-md transition"
            >
              {/* Top */}
              <div className="flex items-center gap-4">
                <Image
                  src="/avtar.png"
                  width={55}
                  height={55}
                  alt={data.name}
                  className="rounded-full border"
                />

                <div>
                  <h3 className="text-lg text-gray-900 font-poppins">
                    {data.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-poppins">
                    {data.place}
                  </p>
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-700 text-normal md:text-lg leading-relaxed font-poppins">
                “{data.description}”
              </p>
              {/* Divider */}
              <div className="w-12 h-1 bg-blue-900 rounded-full mt-2"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
