"use client";

import { useState } from "react";
const Discover = () => {
  const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Featured");
  return (
    <div className="w-[80%] mx-auto pb-[40px] md:pb-[80px]">
      <div className=" flex flex-col justify-center items-center gap-[16px] md:gap-[18px]">
        <h1 className=" font-poppins text-[24px] md:text-[44px] text-[#040819] font-normal md:font-semibold text-center">
          Discover Your Passion, <br></br> Build Your Skills
        </h1>
        <p className=" font-satoshi font-normal text-[18px] text-[#82868E] text-center">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different <br></br> fields, from
          technology to the arts, and make a difference in your career and life.
        </p>
      </div>
      <div className="mx-auto w-full px-4 py-[40px] md:py-[80px] flex flex-col items-center gap-3 md:gap-4">
       
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {categories.slice(0, 8).map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 select-none whitespace-nowrap ${
                  isActive
                    ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-sm scale-105"
                    : "bg-[#F5F5F6] text-[#4F4F4F] hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

       
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {categories.slice(8, 14).map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 select-none whitespace-nowrap ${
                  isActive
                    ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-sm scale-105"
                    : "bg-[#F5F5F6] text-[#4F4F4F] hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

      
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3">
          {categories.slice(14, 18).map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 select-none whitespace-nowrap ${
                  isActive
                    ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-sm scale-105"
                    : "bg-[#F5F5F6] text-[#4F4F4F] hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            );
          })}

          
          <button
            onClick={() => alert("Show more categories")}
            className="px-3 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            + More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
