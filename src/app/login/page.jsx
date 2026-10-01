
import HeroVisuals from '@/Component/auth/HeroVisuals';
import LoginForm from '@/Component/auth/LoginForm';
import GridBackground from '@/Component/Background/gridBaground';
import { getCourse } from '@/service/courseService';
import React from 'react';

const LogInpage = async () => {
    const data = await getCourse();
    return (
        <section className=' w-full mx-auto min-h-screen bg-[#003BE2] relative overflow-hidden'>
            <GridBackground></GridBackground>
            <div className=' w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 relative py-[80px] md:py-[120px] gap-[30px] md:gap-[30px] justify-center items-center'>
                <HeroVisuals heading={"Sign in with ease"}
                   des={"Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
                   data1={data[0]}
                   data2={data[1]}
                ></HeroVisuals>
                <div className=' w-full'>
                      <LoginForm></LoginForm>
                </div>
               
            </div>
        </section>
    );
};

export default LogInpage;