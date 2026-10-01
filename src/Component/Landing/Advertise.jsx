import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import Happystudent from '../Background/Happystudent';
import CourseCard from '../Card/CourseCard';

export default function Advertise({data}) {
  return (
    <div className="w-[85%] md:w-[80%] mx-auto sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          
          <div className="space-y-6">
            <h1 className=" font-poppins text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#242528] leading-tight tracking-normal">
              Your Path to Professional <br /> Growth Starts Here!
            </h1>
            <p className="font-satoshi font-normal text-[#4B4C53] text-sm sm:text-base leading-relaxed ">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

         
            <div className="flex items-center gap-8 sm:gap-12 pt-4">
              <div>
                <h3 className=" font-poppins text-2xl sm:text-4xl font-bold text-[#003BE2]">12K</h3>
                <p className=" font-satoshi text-xs sm:text-lg text-[#4F4F4F] font-medium mt-1">Students</p>
              </div>
              <div>
                <h3 className=" font-poppins text-2xl sm:text-4xl font-bold text-[#003BE2]">70+</h3>
                <p className=" font-satoshi text-xs sm:text-lg text-[#4F4F4F] font-medium mt-1">Courses</p>
              </div>
              <div>
                <h3 className=" font-poppins text-2xl sm:text-4xl font-bold text-[#003BE2]">16</h3>
                <p className=" font-satoshi text-xs sm:text-lg text-[#4F4F4F] font-medium mt-1">Creators</p>
              </div>
            </div>
          </div>

          
          <div className="relative flex justify-center items-center py-6">
            <div className="relative w-full max-w-md lg:max-w-lg">
           
              <div className="relative z-5 overflow-hidden ">
                <Image
                  src="/Asset/heroImg.png"
                  alt="Professional Hero"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className='absolute z-0 top-[-15%] left-[-12%] opacity-90'>
                   <CourseCard course={data}></CourseCard>
              </div>
          
               <div className="absolute z-50 right-[-14%] top-[10%] h-[100px] w-[100px] md:h-[170px] md:w-[170px] bg-[#D4FB20] [mask-image:url('/Asset/reverseHelix.png')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-image:url('/Asset/reverseHelix.png')] [-webkit-mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]" />
           
              <div className="absolute top-[34%] right-[-6%] sm:right-[-14%] w-[150px] md:w-[250px] bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100  z-10 flex flex-col gap-[2px]">
                <p className=" font-satoshi text-[10px] sm:text-[14px] font-medium text-[#242528]">Learning Progress</p>
                <h4 className=" font-poppins text-[24px] sm:text-[48px] font-bold text-[#242528]">55%</h4>
                <div className="w-full bg-[#D4FB20]/10 h-1.5 rounded-full ">
                  <div className="bg-[#D4FB20] h-full w-[55%]" />
                </div>
              </div>

            </div>
          </div>

        </div>

     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8">
          
          
          <div className="relative flex justify-center items-center order-2 lg:order-1 py-6">
            <div className="relative w-full max-w-md lg:max-w-lg">
              
             
              <div className="relative rounded-3xl z-20">
                <Image
                  src="/Asset/GirlAnalytics.png"
                  alt="Analytics Girl"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

               <div className="absolute z-50 right-[10%] top-[14%] h-[100px] w-[100px] md:h-[170px] md:w-[170px] bg-[#D4FB20] [mask-image:url('/Asset/helix.png')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-image:url('/Asset/helix.png')] [-webkit-mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]" />

              
              <div className="absolute top-4 -left-3 sm:-left-6 bg-[#003BE2] text-[#F5F5F6] p-3 sm:p-4 w-[200px] md:w-[300px] rounded-2xl shadow-xl min-w-[140px] sm:min-w-[170px] z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className=" font-satoshi text-[10px] opacity-50 md:text-[16px] uppercase tracking-wider font-semibold">Total Revenue</p>
                    <p className=" font-sans text-[10px] ">July 2024</p>
                  </div>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold mt-1">$120.29</h4>
                <div className="w-full bg-[#D4FB20]/40 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#D4FB20] h-full w-[70%]" />
                </div>
              </div>

             <div className="absolute top-[28%] -left-3 sm:-left-6 bg-[#003BE2] text-[#F5F5F6] p-3 sm:p-4 w-[200px] rounded-2xl shadow-xl min-w-[140px] sm:min-w-[170px] z-10">
                <p className=" font-satoshi text-[10px] opacity-50 md:text-[16px] uppercase tracking-wider font-semibold">Year To Date</p>
                <p className=" font-sans text-[10px] ">2023</p>
                <h4 className="text-lg sm:text-2xl font-bold mt-1">$1,200.38</h4>
                <span className="inline-block bg-[#D4FB20] text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full mt-2">
                  +22%
                </span>
              </div>

              
              <div className="absolute bottom-[10%] right-[6%]  bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-2 z-40">
                <Happystudent></Happystudent>
              </div>

             
           

            </div>
          </div>

         
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className=" font-poppins text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#242528] leading-tight">
             Create & Manage <br /> Courses Easily.
            </h2>
            <p className="text-[#4B4C53] text-sm sm:text-[18px] leading-relaxed max-w-xl">
              <span className='font-bold text-[20px]'>ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            
            <ul className="space-y-3.5 pt-2">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-[#242528] font-satoshi font-medium text-sm sm:text-[18px]">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span >{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}