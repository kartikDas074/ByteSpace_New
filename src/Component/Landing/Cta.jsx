import React from 'react';

const Cta = () => {
    return (
        <div className=" max-w[80vw] md:max-w-[60vw] mx-auto px-4   py-[40px] md:py-[85px]">
             <div className=' flex flex-col justify-center items-center space-y-[30px] md:space-y-[40px]'>
                <h1 className=" font-poppins font-semibold md:font-bold text-[28px] md:text-[44px] text-[#F5F5F6] text-center ">
                    Unlock Your Potential as a <br /> Creator with ByteSpace
                </h1>
                <p className=' font-satoshi text-[16px] md:text-[18px] font-normal text-[#F5F5F6] tracking-tight text-center'>
                    Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
                </p>
                <button className=' px-[10px] py-[8px] rounded-full bg-[#D4FB20] text-[#242528] font-satoshi font-medium text-[18px]'> Join as Creator</button>
             </div>
        </div>
    );
};

export default Cta;