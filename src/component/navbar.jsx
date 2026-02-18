"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ scrollFns }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full w-full bg-white/95 border-b border-gray-200 font-poppins z-50">

      {/* Navbar Wrapper */}
      <div className="container mx-auto flex items-center justify-between px-6 md:px-0 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/Logo (2).png"
            height={65}
            width={65}
            alt="Logo"
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-lg font-medium">
          <button onClick={() => scrollFns?.hero?.()} className="text-gray-800 hover:text-blue-500 transition cursor-pointer">
            Home
          </button>
          <button onClick={() => scrollFns?.feature?.()} className="text-gray-800 hover:text-blue-500 transition cursor-pointer">
            Features
          </button>
          <button onClick={() => scrollFns?.work?.()} className="text-gray-800 hover:text-blue-500 transition cursor-pointer">
            How it works
          </button>
          <button onClick={() => scrollFns?.contact?.()} className="text-gray-800 hover:text-blue-500 transition cursor-pointer">
            Contact Us
          </button>
        </div>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 w-full p-4 text-gray-700 flex flex-col items-start gap-6 text-lg font-medium">
          <button onClick={() => { scrollFns?.hero?.(); setOpen(false) }}
            className="cursor-pointer"
          >
            Home
          </button>
          <button onClick={() => { scrollFns?.feature?.(); setOpen(false) }}
            className="cursor-pointer">
            Features
          </button>
          <button onClick={() => { scrollFns?.work?.(); setOpen(false) }}
            className="cursor-pointer"
          >
            How it works
          </button>
          <button onClick={() => { scrollFns?.contact?.(); setOpen(false) }}
            className="cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
