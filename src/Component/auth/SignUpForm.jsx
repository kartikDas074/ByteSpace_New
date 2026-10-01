import React from 'react';

const SignUpForm = () => {
    return (
      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 mx-auto">
      
      <div className="mb-8">
        <span className="text-sm md:text-[18px] font-medium font-satoshi text-[#003BE2]">Create an Account</span>
        <h1 className="text-3xl  sm:text-[44px] font-poppins font-extrabold text-[#242528] mt-1 leading-tight">
          Welcome to<br />ByteSpace
        </h1>
      </div>

      <form className="space-y-5">
        <div>
          <label className=" font-satoshi block text-xs md:text-[14px] font-normal text-[#242528] mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Jamie Davis"
            className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all"
          />
        </div>

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
            Continue
          </button>
        </div>
      </form>

      <div className="mt-12 md:mt-[112px] text-center text-sm text-slate-500">
        Already have an account?{' '}
        <a href="#" className="text-blue-500 hover:underline font-medium ml-1">
          Login
        </a>
      </div>

    </div>
    );
};

export default SignUpForm;