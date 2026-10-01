import { Search } from "lucide-react";
import React from "react";

const BannerWriting = () => {
  return (
    <div className="relative z-10 w-[94%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto   mt-4 mb-6 sm:mt-7 sm:mb-8    md:mt-10 md:mb-10  lg:mt-12.25 lg:mb-12"
    >
      <div className="flex justify-center items-center flex-col
        gap-3 sm:gap-5 md:gap-6 lg:gap-8"
      >
        <h1 className="hero-title font-poppins font-semibold text-[#FFFFFF] text-center tracking-normal  text-[27px] leading-[1.2] sm:text-[40px] sm:leading-[1.2]  md:text-[54px] md:leading-[1.15] lg:text-[72px] lg:leading-tight"
        >
          Get Access to Hundreds <br className="hidden sm:inline" /> Courses Available
        </h1>
        <p className="hero-description font-satoshi font-regular text-[#E5E6E8] text-center tracking-normal
          /* 1. Very Small (<640px) */
          text-[12.5px] max-w-[310px] px-2 leading-relaxed
          /* 2. Small (sm: 640px - 767px) */
          sm:text-sm sm:max-w-md
          /* 3. Medium (md: 768px - 1023px) */
          md:text-[16px] md:max-w-xl
          /* 4. Large (lg: >=1024px) */
          lg:text-[18px] lg:max-w-none"
        >
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>

      <div className="hero-search flex mx-auto
        /* 1. Very Small (<640px) */
        flex-col gap-2.5 w-full max-w-[310px] my-4
        /* 2. Small (sm: 640px - 767px) */
        sm:flex-row sm:items-center sm:gap-3 sm:max-w-md sm:my-6
        /* 3. Medium (md: 768px - 1023px) */
        md:max-w-xl md:my-8
        /* 4. Large (lg: >=1024px) */
        lg:max-w-2xl lg:my-15"
      >
        <div className="relative flex-1 min-w-0 w-full flex items-center bg-white rounded-full shadow-sm
          /* 1. Very Small (<640px) */
          px-3.5 py-2
          /* 2. Small (sm: 640px - 767px) */
          sm:px-4 sm:py-2.5
          /* 3. Medium (md: 768px - 1023px) & 4. Large (lg) */
          md:px-5 md:py-3"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0 mr-2 sm:mr-3" />
          <input
            type="text"
            placeholder="Course, topic, creator"
            className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none
              text-xs sm:text-sm md:text-base"
          />
        </div>

        <button className="bg-[#ccff00] hover:bg-[#b5e600] font-satoshi text-[#242528] font-medium rounded-full transition-colors cursor-pointer shrink-0 text-center
          /* 1. Very Small (<640px) */
          px-5 py-2 text-xs w-full
          /* 2. Small (sm: 640px - 767px) */
          sm:px-6 sm:py-2.5 sm:text-sm sm:w-auto
          /* 3. Medium (md: 768px - 1023px) & 4. Large (lg) */
          md:px-8 md:py-3 md:text-base"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default BannerWriting;
