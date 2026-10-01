import React from 'react';

const FLoatingObject = () => {
    return (
        <div className="pointer-events-none absolute z-5 inset-0 overflow-hidden hidden xl:block w-full">
            <div className="absolute z-5 left-[-8%] top-[-27%] h-[385px] w-[385px] bg-[#D4FB20] [mask-image:url('/Asset/helix.png')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-image:url('/Asset/helix.png')] [-webkit-mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]" />
             <div className="absolute z-5 right-[-12%] lg:right-[-10%] top-[5%] h-[300px] w-[300px] lg:h-[385px] lg:w-[385px] bg-[#FFFFFF] [mask-image:url('/Asset/cylinder.png')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-image:url('/Asset/cylinder.png')] [-webkit-mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]" />
             <div className="absolute z-5 left-[-3%] top-[50%] h-[175px] w-[175px] bg-[#FFFFFF] [mask-image:url('/Asset/MainCone.png')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-image:url('/Asset/MainCone.png')] [-webkit-mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]" />
             <div className="absolute z-5 right-[14%] top-[1%] h-[175px] w-[175px] bg-[#D4FB20] [mask-image:url('/Asset/cone.png')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-image:url('/Asset/cone.png')] [-webkit-mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]" />
             <div className="absolute z-5 left-[2%] top-[60%] h-[342px] w-[342px] bg-[#D4FB20] [mask-image:url('/Asset/torus.png')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-image:url('/Asset/torus.png')] [-webkit-mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]" />
             <div className="absolute z-5 right-[2%] top-[60%] h-[330px] w-[330px] bg-[#D4FB20] [mask-image:url('/Asset/reverseHelix.png')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-image:url('/Asset/reverseHelix.png')] [-webkit-mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]" />
        </div>
    );
};

export default FLoatingObject;