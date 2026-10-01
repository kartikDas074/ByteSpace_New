import React from 'react';

const Blur = () => {
    return (
        <div>
            <div className="absolute  left-[10%] top-[-2%] h-[200px] w-[30vw] rounded-full bg-[#CBFC01]/55 blur-[100px]" />
            <div className="absolute  left-[-8%] top-[20%] h-[50%] w-[30vw] rounded-full bg-[#003BE2]/23 blur-[100px]" />
             <div className="absolute  left-[-17%] bottom-[4%] h-[20%] w-[30vw] rounded-full bg-[#CBFC01]/74 blur-[100px]" />
              <div className="absolute  right-[-8%] top-[-8%] h-[50%] w-[30vw] rounded-full bg-[#003BE2]/20 blur-[100px]" />
               <div className="absolute  right-[-3%] bottom-[-15%] h-[50%] w-[30vw] rounded-full bg-[#003BE2]/20 blur-[100px]" />
        </div>
    );
};

export default Blur;