import React from 'react';
import Image from 'next/image';

const Course = ({ data }) => {
  return (
    <div className=" max-w[90vw] md:max-w-[80vw] mx-auto px-4 mb-[40px] md:mb-[70px]">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
          
            <div>
              <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-4 bg-gray-100">
               
                <Image
                  src={course.courseImage}
                  alt={course.courseName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-start gap-[20px] md:gap-[20px]">
                  <div className=' font-satoshi bg-[#F6F6F699] font-medium text-[#4F4F4F] text-[12px] px-3 py-2 rounded-full'>{course.lessons} Lessons</div>
                  <div className=' font-satoshi bg-[#F6F6F699] font-medium text-[#4F4F4F] text-[12px] px-3 py-2 rounded-full'>{course.totalTime} hours</div>
                  <div className=' font-satoshi bg-[#F6F6F699] font-medium text-[#4F4F4F] text-[12px] px-3 py-2 rounded-full'>{course.totalComments} Comments</div>
                </div>
              </div>

              
              <div className="flex justify-between items-start gap-2 mb-1">
                <h3 className="font-bold font-poppins text-[#000000] text-base text-[18px] sm:text-[20px] line-clamp-1 hover:line-clamp-none transition-all">
                  {course.courseName}
                </h3>
                <div className="flex font-satoshi text-[#4F4F4F] font-normal items-center gap-1  shrink-0">
                  <span>{course.rating}</span>
                  
                  <svg
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

             
              <p className="text-xs font-normal font-satoshi  text-[#4F4F4F] mb-4">
                by <span className="text-[#003BE2] font-medium">{course.courseCreator}</span>
              </p>

              
              <div className="flex items-center justify-between mb-4">
               
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F5F6] text-[#4B4C53] text-xs font-medium">
                 
                  <svg
                    className="w-3.5 h-3.5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span>{course.level}</span>
                </div>

                
                <div className="flex items-center -space-x-2">
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
                    alt="student"
                  />
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"
                    alt="student"
                  />
                  <img
                    className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60"
                    alt="student"
                  />
                  <span className="flex items-center justify-center h-7 w-7 rounded-full ring-2 ring-white bg-lime-400 text-[10px] font-bold text-[#242528]">
                    26+
                  </span>
                </div>
              </div>
            </div>

            
            <div className="pt-2 border-t border-gray-50 flex items-baseline gap-1">
              <span className="text-xl font-satoshi font-bold text-[#003BE2]">${course.price}</span>
              <span className="text-xs font-satoshi text-gray-400 font-normal">/lifetime</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;