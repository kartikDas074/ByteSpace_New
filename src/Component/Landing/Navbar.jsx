"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-30 w-[94%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto
      /* 1. Very Small (<640px) */
      mt-3.5 mb-5
      /* 2. Small (sm: 640px - 767px) */
      sm:mt-5 sm:mb-7
      /* 3. Medium (md: 768px - 1023px) */
      md:mt-7 md:mb-9
      /* 4. Large (lg: >=1024px) */
      lg:mt-8.75 lg:mb-12"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex gap-1.5 justify-center items-center">
          <Image
            src="/Asset/Logo.png"
            alt="ByteSpace Logo"
            width={28}
            height={28}
            priority
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px]"
          />
          <p className="font-clash text-lg sm:text-xl md:text-2xl text-center font-bold text-[#F5F5F6]">
            ByteSpace
          </p>
        </Link>

        {/* Desktop / Tablet Nav Links (md & lg) */}
        <div className="hidden md:flex gap-4 lg:gap-6 justify-center items-center cursor-pointer">
          <Link
            href="/"
            className="font-satoshi text-[15px] lg:text-[16px] text-[#F5F5F6] font-medium hover:text-[#CBFC01] transition-colors"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="font-satoshi text-[15px] lg:text-[16px] text-[#F5F5F6] font-medium hover:text-[#CBFC01] transition-colors"
          >
            Courses
          </Link>

          <Link
            href="/creator"
            className="font-satoshi text-[15px] lg:text-[16px] text-[#F5F5F6] font-medium hover:text-[#CBFC01] transition-colors"
          >
            Creator
          </Link>
        </div>

        {/* Desktop / Tablet Right Actions (md & lg) */}
        <div className="hidden md:flex gap-4 lg:gap-6 justify-center items-center">
          <Link href="/login" className="cursor-pointer">
            <p className="font-satoshi text-[15px] lg:text-[16px] text-[#F5F5F6] font-regular text-center hover:text-[#CBFC01] transition-colors">
              Sign In
            </p>
          </Link>
          <Link href="/register" className="cursor-pointer">
            <p className="font-satoshi text-[15px] lg:text-[16px] text-[#F5F5F6] font-regular text-center hover:text-[#CBFC01] transition-colors">
              Join Us
            </p>
          </Link>
          <div>
            <Image
              src="/Asset/signup.png"
              alt="ByteSpace Signup"
              width={16}
              height={16}
            />
          </div>
        </div>

        {/* Mobile Toggle Button & Quick CTA (< md: ver sm & sm) */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          <Link
            href="/register"
            className="font-satoshi text-[11px] sm:text-xs font-medium text-[#242528] bg-[#ccff00] hover:bg-[#b5e600] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full transition-colors"
          >
            Join Us
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} className="sm:w-6 sm:h-6" /> : <Menu size={22} className="sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (< md: ver sm & sm) */}
      {menuOpen && (
        <div className="md:hidden mt-2.5 sm:mt-3 p-3.5 sm:p-4 bg-[#002cb3]/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-2.5 sm:gap-3 transition-all animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-satoshi text-[14px] sm:text-[15px] text-[#F5F5F6] font-medium hover:text-[#CBFC01] transition-colors py-1.5 px-2 rounded-lg"
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setMenuOpen(false)}
            className="font-satoshi text-[14px] sm:text-[15px] text-[#F5F5F6] font-medium hover:text-[#CBFC01] transition-colors py-1.5 px-2 rounded-lg"
          >
            Courses
          </Link>
          <Link
            href="/creator"
            onClick={() => setMenuOpen(false)}
            className="font-satoshi text-[14px] sm:text-[15px] text-[#F5F5F6] font-medium hover:text-[#CBFC01] transition-colors py-1.5 px-2 rounded-lg"
          >
            Creator
          </Link>
          <div className="pt-2 border-t border-white/15 flex items-center justify-between px-2">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="font-satoshi text-[14px] sm:text-[15px] text-[#F5F5F6] font-medium hover:text-[#CBFC01]"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1.5 font-satoshi text-[11px] sm:text-xs text-[#242528] bg-[#ccff00] px-3 py-1.5 rounded-full font-medium"
            >
              Join Us
              <Image src="/Asset/signup.png" alt="signup" width={12} height={12} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
