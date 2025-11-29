import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <Image 
            src="/Logo (2).png" 
            height={150} 
            width={150} 
            alt="Company Logo" 
            className="select-none"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-2xl font-semibold mb-4 font-poppins">Quick Links</h1>
          <ul className="space-y-2 text-lg font-poppins">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-blue-400 transition">
                Offers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-lg font-poppins">
          <h1 className="text-2xl font-semibold mb-2">Contact Us</h1>

          <p className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-blue-400" />
            <span>
              Devi Marg, Bani Park,<br />
              Jaipur, Rajasthan - 302016
            </span>
          </p>

          <p className="flex items-center gap-4">
            <Mail className="h-8 w-8 text-blue-400" />
            support.marketplace@gmail.com
          </p>

          <p className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-blue-400" />
            +91 97578 5854
          </p>
        </div>

        {/* Social / Extra Section (Optional) */}
        <div>
          <h1 className="text-2xl font-semibold mb-4 font-poppins">More</h1>
          <ul className="space-y-2 text-lg font-poppins">
            <li className="hover:text-blue-400 transition">Privacy Policy</li>
            <li className="hover:text-blue-400 transition">Terms & Conditions</li>
            <li className="hover:text-blue-400 transition">Support</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center">
        <p className="text-lg font-poppins">
          © 2025 Marketplace — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
