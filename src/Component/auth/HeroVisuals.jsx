import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CourseCard from '../Card/CourseCard';
import Happystudent from '../Background/Happystudent';

const HeroVisuals = ({heading,des,data1,data2}) => {
    return (
        <div>
        <Link href="/" className="flex gap-1.5 justify-start items-center mb-[20px] md:mb-[30px]">
          <Image
            src="/Asset/Logo.png"
            alt="ByteSpace Logo"
            width={28}
            height={28}
            priority
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px]"
          />
        </Link>
        <div className=' flex flex-col items-start justify-center gap-[8px] md:gap-[16px]'>
              <h1 className=' font-poppins font-semibold text-[#F5F5F6] text-[20px] tracking-normal'>{heading}</h1>
              <p className=' font-satoshi font-normal text-[16px] md:font-[18px] text-[#F5F5F6]'>{des}</p>
        </div>
        <div className=' relative mt-[120px] md:mt-[220px] w-[300px] md:w-[350px]'>
              <div className='relative w-full'>
                <CourseCard course={data1}></CourseCard>
              </div>
              <div className='absolute w-full top-[-25%] left-[25%]'>
                <CourseCard course={data2}></CourseCard>
              </div>
              <div className=' absolute bg-[#D4FB20] w-[200px] md:w-[250px] px-[10px] py-[10px] rounded-[10px] top-[90%] left-[60%]'>
                <Happystudent></Happystudent>
              </div>
              <div className="absolute hidden md:flex z-5 left-[1%] top-[-20%] h-[152px] w-[152px] bg-[#D4FB20] [mask-image:url('/Asset/torus.png')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-image:url('/Asset/torus.png')] [-webkit-mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]" />
              <div className="absolute hidden md:flex z-5 left-[3%] bottom-[-25%] h-[175px] w-[175px] bg-[#D4FB20] [mask-image:url('/Asset/cone.png')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-image:url('/Asset/cone.png')] [-webkit-mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]" />
               <div className="absolute hidden md:flex z-5 right-[-36%] bottom-[2%] h-[150px] w-[150px] bg-[#FFFFFF] [mask-image:url('/Asset/helix.png')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-image:url('/Asset/reverseHelix.png')] [-webkit-mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]" />
        </div>
        </div>
    );
};

export default HeroVisuals;