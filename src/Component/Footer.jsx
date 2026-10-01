'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
         <footer className="w-full bg-white text-slate-700 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        
       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-[80px] md:mb-[130px]">
          
         
          <div className="lg:col-span-5 space-y-6">
            
            
            <div className="flex items-center gap-2">
               <Link href="/" className="flex gap-1.5 justify-center items-center">
          <Image
            src="/Asset/Logo.png"
            alt="ByteSpace Logo"
            width={28}
            height={28}
            priority
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px]"
          />
          <p className="font-clash text-lg sm:text-xl md:text-2xl text-center font-bold text-[#242528]">
            ByteSpace
          </p>
        </Link>
            </div>

          
            <p className="font-satoshi text-[#242528] text-sm  leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

           
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm text-slate-800 placeholder-slate-400"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-[#D4FB20] hover:bg-[#b8e600] text-slate-900 font-semibold rounded-full text-sm transition-colors duration-200"
              >
                Search
              </button>
            </form>

           
            <p className="font-satoshi text-[#242528] text-[12px]  leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4 lg:pt-0">
            
           
            <div className="space-y-3">
              <ul className="space-y-3 font-satoshi text-sm text-[#242528] font-normal">
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Featured Courses</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Featured Categories</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Business</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">IT</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Design</Link></li>
              </ul>
            </div>

           
            <div className="space-y-3">
              <ul className="space-y-3 font-satoshi text-sm text-[#242528]">
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Development</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Marketing</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Photography</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Finance</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Sport</Link></li>
              </ul>
            </div>

           
            <div className="space-y-3">
              <ul className="space-y-3 font-satoshi text-sm text-[#242528]">
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Become a Creator</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Affiliate Program</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Help</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">About</Link></li>
              </ul>
            </div>

          </div>

        </div>

        
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#242528] font-satoshi font-normal">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Cookies Settings</Link>
          </div>
        </div>

      </div>
    </footer>
    );
};

export default Footer;