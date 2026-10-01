import React from "react";

const Happystudent = () => {
  return (
    <div className="w-[200px]">
      
      <p className=" font-satoshi text-xs md:text-[16px] font-bold text-[#242528]">Happy Students</p>

     
      <div className="flex items-center gap-1.5 font-satoshi ">
        <span className="text-[10px] font-normal text-[#242528] ">4.5</span>
        <span className="text-[10px] text-[#82868E]">(240)</span>
        <span className="text-[13px] text-[#D4FB20]">★</span>

      
      </div>

     
      <div className="flex items-center -space-x-2">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
          alt="Student"
          className="h-7 w-7 rounded-full object-cover border-2 border-white"
        />

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
          alt="Student"
          className="h-7 w-7 rounded-full object-cover border-2 border-white"
        />

        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
          alt="Student"
          className="h-7 w-7 rounded-full object-cover border-2 border-white"
        />

        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
          alt="Student"
          className="h-7 w-7 rounded-full object-cover border-2 border-white"
        />

        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
          alt="Student"
          className="h-7 w-7 rounded-full object-cover border-2 border-white"
        />

       
        <div className="flex font-satoshi  h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] text-[12px] font-bold text-[#242528]">
          2k+
        </div>
      </div>
    </div>
  );
};

export default Happystudent;
