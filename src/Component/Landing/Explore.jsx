import React from 'react';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    title: 'Design',
    image: '/Asset/Frame1.png', 
  },
  {
    id: 2,
    title: 'Development',
    image: '/Asset/Frame2.png',
  },
  {
    id: 3,
    title: 'IT & Software',
    image: '/Asset/Frame3.png',
  },
  {
    id: 4,
    title: 'Business',
    image: '/Asset/Frame4.png',
  },
  {
    id: 5,
    title: 'Marketing',
    image: '/Asset/Frame5.png',
  },
  {
    id: 6,
    title: 'Photography',
    image: '/Asset/Frame6.png',
  },
];

const Explore= () => {
  return (
   
      <div className=" max-w-[90vw] md:max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <div className="text-center mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl font-poppins sm:text-3xl md:text-4xl font-bold text-[#040819] tracking-tight mb-3 sm:mb-4 text-center">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className=" font-satoshi text-sm sm:text-[18px] text-[#82868E] leading-relaxed font-normal">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories Grid System
            - Default (< 576px / Mobile): 2 columns
            - sm (>= 640px): 3 columns
            - lg (>= 1024px): 6 columns
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-200/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="relative w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#ccff00] group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* Category Title */}
              <h3 className="text-gray-800 font-semibold text-base sm:text-lg group-hover:text-black transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
   
  );
};

export default Explore;