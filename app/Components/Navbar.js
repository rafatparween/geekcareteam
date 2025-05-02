"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 py-3 px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-30 h-18 bg-black rounded-full border-4 border-white flex flex-col justify-center items-center text-white font-bold text-sm leading-none">
            <span className="text-white">Geek</span>
            <span className="text-xs font-normal">CareHelpDesk</span>
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl text-black cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-white text-sm font-medium">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/service" className="hover:underline">Services</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact us</Link></li>
          <li><Link href="/policy" className="hover:underline">Privacy Policy</Link></li>
        </ul>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 space-y-3 md:hidden text-black text-sm font-medium">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/service" className="hover:underline">Services</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact us</Link></li>
          <li><Link href="/policy" className="hover:underline">Privacy Policy</Link></li>
        </ul>
      )}
    </nav>
  );
}
