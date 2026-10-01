import Image from "next/image";
import Happystudent from "./Happystudent";

export default function Circle() {
  return (
    <div className="z-2 w-full max-w-5xl mx-auto flex justify-center items-end mt-6 sm:mt-7 md:mt-8 overflow-visible">

     
      <div className="hero-platform absolute bottom-0 rounded-full border-[#CBFC01] left-1/2 -translate-x-1/2  w-[410px] h-[410px] border-[105px] top-[400px]  sm:w-[530px] sm:h-[530px] sm:border-[135px] sm:top-[440px] md:w-[740px] md:h-[740px] md:border-[190px] md:top-[490px]  lg:w-[min(1149px,80vw)] lg:h-[min(1149px,80vw)] lg:border-[min(320px,22.2vw)] lg:top-[582px]"
      />

      
      <div className="hero-person-frame absolute z-10 h-auto left-1/2 -translate-x-1/2         w-[230px] top-[350px]  sm:w-[300px] sm:top-[380px]  md:w-[430px] md:top-[430px]  lg:w-[min(578px,40.14vw)] lg:top-[512px]"
      >
        <Image
          src="/Asset/heroImg.png"
          alt="Hero Person"
          width={500}
          height={600}
          priority
          className="hero-person-image w-full object-contain drop-shadow-lg
            h-[230px]
            sm:h-[300px]
            md:h-[410px]
            lg:h-[min(541px,37.5vw)]"
        />
      </div>

     
      <div className="hero-course-card absolute z-20 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center
        /* 1. Very Small (<640px) */
        left-2.5 top-[420px] p-2 max-w-[150px] gap-1.5
        /* 2. Small (sm: 640px - 767px) */
        sm:left-5 sm:top-[460px] sm:p-2.5 sm:max-w-none sm:gap-2
        /* 3. Medium (md: 768px - 1023px) */
        md:left-8 md:top-[540px] md:p-3.5 md:gap-3
        /* 4. Large (lg: >=1024px) - anchors 316px left of center, exactly 404px at 1440px */
        lg:left-[calc(50%-316px)] lg:top-[639px] lg:right-auto lg:p-4"
      >
        <div className="text-left">
          <h4 className="font-bold font-satoshi text-[#242528]
            text-[11px] sm:text-[13px] md:text-[15px] lg:text-[16px]"
          >
            UI/UX Design
          </h4>
          <p className="font-satoshi font-normal text-[#82868E]
            text-[8.5px] sm:text-[10px] md:text-[11px] lg:text-xs"
          >
            200 Courses • 1000+ Students
          </p>
        </div>
      </div>

      
      <div className="hero-progress-card absolute z-20 bg-white rounded-2xl shadow-xl border border-gray-100 text-left  right-2.5 left-auto top-[490px] p-2 min-w-[110px] space-y-1  sm:right-5 sm:top-[530px] sm:p-2.5 sm:min-w-[130px]  md:right-8 md:top-[540px] md:p-4 md:min-w-[150px] md:space-y-1.5  lg:left-[calc(50%+162px)] lg:top-[651px] lg:right-auto lg:p-5 lg:min-w-[140px] lg:space-y-[8px]"
      >
        <p className="font-satoshi text-[#242528] font-medium
          text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]"
        >
          Learning Progress
        </p>
        <h3 className="font-poppins font-semibold text-[#242528]
          text-lg sm:text-2xl md:text-4xl lg:text-5xl mt-0.5 md:mt-1"
        >
          55%
        </h3>
       
        <div className="bg-gray-200 rounded-full overflow-hidden mt-1
          w-[75px] h-1.5
          sm:w-[100px]
          md:w-[140px] md:h-2
          lg:w-[200px] lg:h-2"
        >
          <div className="bg-[#D4FB20] h-full w-[55%] rounded-full"></div>
        </div>
      </div>

      <div className=" absolute z-100 hidden md:flex bg-[#FFFFFF] px-[12px] py-[20px] rounded-[20px] top-[80%] left-[30%]">
        <Happystudent></Happystudent>
      </div>

    </div>
  );
}