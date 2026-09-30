import { Search } from "lucide-react";
import React from "react";

const BannerWriting = () => {
  return (
    <div className=" relative z-10 w-[90%] md:w-[80%]  mx-auto mt-12.25 mb-12  ">
      <div className=" flex justify-center items-center flex-col gap-8">
        <h1 className=" font-poppins font-semibold text-[#FFFFFF] text-[72px] text-center tracking-normal">
          Get Access to Hundreds <br /> Courses Available
        </h1>
        <p className=" font-satoshi font-regular text-[#E5E6E8] text-[18px] text-center tracking-normal">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>
      <div className="flex items-center gap-3 w-full max-w-2xl mx-auto my-15 ">
          
          <div className="relative flex-1 flex items-center bg-white rounded-full px-5 py-3 shadow-sm">
            <Search className="w-5 h-5 text-gray-400 shrink-0 mr-3" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-base"
            />
          </div>

          <button className="bg-[#ccff00] hover:bg-[#b5e600] font-satoshi text-[#242528] font-medium px-8 py-3 rounded-full transition-colors cursor-pointer shrink-0">
            Search
          </button>
        </div>
    </div>
  );
};

export default BannerWriting;
