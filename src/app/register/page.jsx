import HeroVisuals from '@/Component/auth/HeroVisuals';
import SignUpForm from '@/Component/auth/SignUpForm';
import GridBackground from '@/Component/Background/gridBaground';
import { getCourse } from '@/service/courseService';
import React from 'react';

const LogInpage = async () => {
    const data = await getCourse();
    return (
       <section className=' w-full mx-auto min-h-screen bg-[#003BE2] relative overflow-hidden'>
            <GridBackground></GridBackground>
            <div className=' w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 relative py-[80px] md:py-[120px] gap-[30px] md:gap-[30px] justify-center items-center'>
                <HeroVisuals heading={"Sign up and come in"}
                   des={"The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"}
                   data1={data[0]}
                   data2={data[1]}
                ></HeroVisuals>
                <div className=' w-full'>
                    <SignUpForm></SignUpForm>
                </div>
                
            </div>
        </section>
    );
};

export default LogInpage;