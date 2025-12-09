"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full z-50">

      {/* Navbar Wrapper */}
      <div className="w-full bg-white/95 backdrop-blur-md rounded-none md:rounded-full shadow-md flex items-center justify-between px-6 md:px-12 py-3 md:mt-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/Logo (2).png"
            height={55}
            width={55}
            alt="Logo"
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
          <Link href="#hero" className="text-gray-800 hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="#features" className="text-gray-800 hover:text-blue-500 transition">
            Features
          </Link>
          <Link href="#work" className="text-gray-800 hover:text-blue-500 transition">
            How it works
          </Link>
          <Link href="#contact" className="text-gray-800 hover:text-blue-500 transition">
            Contact Us
          </Link>
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
        <div className="md:hidden bg-white/95 w-full p-4 text-gray-700 flex flex-col gap-6 text-lg font-medium">
          <Link href="#hero" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="#features" onClick={() => setOpen(false)}>
            Features
          </Link>
          <Link href="#work" onClick={() => setOpen(false)}>
            How it works
          </Link>
          <Link href="#contact" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
