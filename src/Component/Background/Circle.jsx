import Image from "next/image";

export default function Circle() {
  return (
    <div className="absolulate z-2 w-full max-w-5xl mx-auto flex justify-center items-end mt-8 overflow-visible">
      
      {/*  Green Half Circle (Platform Base) */}
      <div className="absolute bottom-0  w-[1149px] h-[1149px]  border-[#CBFC01] border-[320px]   left-[155px] rounded-full top-[582px]  "></div>
       
       {/* Picture Adjust */}
       <div className="absolute top-[512px] left-[431px] z-10  h-auto">
        <Image
          src="/Asset/heroImg.png" 
          alt="Hero Person"
          width={500}
          height={600}
          priority
          className="w-full h-[541px] w-[578px] object-contain drop-shadow-lg"
        />
      </div>
      
      <div className="absolute left-[404px] top-[639px] z-20 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
        <div className="text-left">
          <h4 className="font-bold font-satoshi text-[#242528] text-[12px] sm:text-[16px]">UI/UX Design</h4>
          <p className=" font-satoshi font-normal text-[10px] sm:text-xs text-[#82868E]">200 Courses • 1000+ Students</p>
        </div>
      </div>

      <div className="absolute left-[882px]  top-[651px] z-20 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 text-left min-w-[140px] space-y-[8px] md:space-y-[8px]">
        <p className=" font-satoshi text-[10px] sm:text-[12px] text-[#242528] font-medium">Learning Progress</p>
        <h3 className=" font-poppins text-2xl sm:text-5xl font-semibold text-[#242528] mt-1">55%</h3>
        {/* Progress bar */}
        <div className="w-[100px] md:w-[200px] bg-gray-200 h-1.5 md:h-2 rounded-full mt-2 overflow-hidden">
          <div className="bg-[#D4FB20] h-full w-[55%] rounded-full"></div>
        </div>
      </div>
      

    </div>
  );
}