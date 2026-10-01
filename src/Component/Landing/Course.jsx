import React from 'react';
import Image from 'next/image';
import CourseCard from '../Card/CourseCard';

const Course = ({ data }) => {
  return (
    <div className=" max-w[90vw] md:max-w-[80vw] mx-auto px-4 mb-[40px] md:mb-[70px]">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map(course =><CourseCard key={course.id} course={course}></CourseCard>  )}
      </div>
    </div>
  );
};

export default Course;