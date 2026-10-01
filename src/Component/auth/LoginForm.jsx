"use client";
import React from "react";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 mx-auto">
      
      <div className="mb-8">
        <span className=" font-satoshi font-normal text-sm md:text-[18px] text-[#003BE2]">Sign In</span>
        <h1 className="text-3xl md:text-[44px] font-semibold text-[#242528] mt-1 leading-tight tracking-normal">
          Welcome Back
        </h1>
      </div>

      <form className="space-y-5">
        <div>
          <label className=" font-satoshi block text-xs md:text-[14px] font-normal text-[#242528] mb-1.5">
            Email
          </label>
          <input
            type="email"
            placeholder="designer@example.com"
            className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all"
          />
        </div>

        <div>
          <label className=" font-satoshi block text-xs md:text-[14px] font-normal text-[#242528] mb-1.5">
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="button"
            className="px-8 py-3 bg-[#D4FB20] hover:bg-[#b8e600] text-[#242528] font-satoshi font-bold rounded-full text-sm transition-colors duration-200 shadow-sm"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="relative my-8 flex items-center justify-center">
        <div className="w-full border-t border-slate-200"></div>
        <span className="bg-white px-3 text-xs text-slate-400 absolute">or</span>
      </div>

      <div className="flex justify-center gap-4">
        <button 
          type="button"
          className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
        </button>

        <button 
          type="button"
          className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        </button>
      </div>

      <div className="mt-12 md:mt-[112px] font-satoshi font-normal  text-center text-sm text-[#4B4C53] ">
        New user?{' '}
        <a href="#" className="text-blue-500 hover:underline font-medium ml-1">
          Create an account
        </a>
      </div>

    </div>
  );
};

export default LoginForm;
