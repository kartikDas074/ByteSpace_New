import React from "react";
import Image from "next/image";
import { LuLoader } from "react-icons/lu";
const CompanyLogo = () => {
  const companyLogos = [
    { id: 1, name: "Logoipsum", src: "/Asset/cmp1.png" },
    { id: 2, name: "Logoipsum", src: "/Asset/cmp2.png" },
    { id: 3, name: "Logoipsum", src: "/Asset/cmp3.png" },
    { id: 4, name: "Logoipsum", src: "/Asset/cmp4.png" },
    { id: 5, name: "Logoipsum", src: "/Asset/cmp5.png" },
  ];

  return (
    <section className=" w-[80%] mx-auto py-[40px] md:py-[80px]">
      <div className=" w-full mx-auto grid grid-cols-2 md:grid-cols-5 gap-[16px] md:gap-[20px]">
        {companyLogos.map((logo) => (
          <div
            key={logo.id}
            className=" flex items-center justify-center gap-[8px]"
          >  
           {
            logo.id!=2
            ?
            <Image
              src={logo.src}
              alt={logo.name}
              height={40}
              width={40}
              className="object-contain h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
            />
            :
            <LuLoader className=" text-[#82868E] font-bold text-3xl" />
           }
             <p className=" font-satoshi font-bold text-[#82868E] text-[18px] md:text-[24px]">{logo.name}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyLogo;
