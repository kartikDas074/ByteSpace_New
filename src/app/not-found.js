import GridBackground from '@/Component/Background/gridBaground';
import Navbar from '@/Component/Landing/Navbar';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="bg-[#FFFFFF] overflow-x-hidden">
            <section className=' w-full mx-auto min-h-screen bg-[#003BE2] relative overflow-hidden  '>
            <GridBackground></GridBackground>
            <Navbar></Navbar>
            <div>
                <h1 className=' absolute font-poppins font-extrabold text-[200px] md:text-[300px] bg-gradient-to-b from-[#D4FB20] via-[#D4FB20]/70 to-[#D4FB20]/10 bg-clip-text text-transparent  top-[6%] left-[30%]'>404</h1>
            </div>
             <div className=' z-10 relative w-[60%] mx-auto flex flex-col gap-[16px] justify-center items-center mt-[200px] md:mt-[250px]'>
                <h1 className=' font-poppins font-medium text-[#FFFFFF] text-center text-[44px] md:text-[72px]'>
                    The page you are looking <br></br> for doesn’t exist
                </h1>
                <p className=' font-satoshi font-normal text-[18px] text-[#E5E6E8] text-center'>
                    Try to use a correct url or go back to homepage to start again
                </p>
                <Link href={'/'}>
                     <button className=' cursor-pointer w-[200px] font-satoshi font-semibold text-[18px] md:font-[20px]  px-[12px] py-[14px] rounded-full bg-[#D4FB20] text-[#242528] '>
                    Back to Home
                </button>
                </Link>
               
             </div>
        </section>
        </div>
    );
};

export default NotFound;