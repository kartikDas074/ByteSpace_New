import Blur from "@/Component/Background/Blur";
import Circle from "@/Component/Background/Circle";
import DecorativeObject from "@/Component/Background/DecorativeObject";
import FLoatingObject from "@/Component/Background/FLoatingObject";
import GridBackground from "@/Component/Background/gridBaground";
import Footer from "@/Component/Footer";
import Advertise from "@/Component/Landing/Advertise";
import BannerWriting from "@/Component/Landing/BannerWriting";
import CompanyLogo from "@/Component/Landing/CompanyLogo";
import Course from "@/Component/Landing/Course";
import Cta from "@/Component/Landing/Cta";
import CustomTestimonials from "@/Component/Landing/CustomTestimonials";
import Discover from "@/Component/Landing/Discover";
import Explore from "@/Component/Landing/Explore";
import Navbar from "@/Component/Landing/Navbar";
import { getCourse } from "@/service/courseService";
import { Footprints } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const data = await getCourse();
  console.log(data);
  console.log('i am love with a fairy tale');
  return (
    <div className="bg-[#FFFFFF] overflow-x-hidden">


      {/* Hero Section Navbar + banner */}
      <section className="hero-section relative min-h-[660px] sm:min-h-[740px] md:min-h-[900px] lg:min-h-[max(100vh,1024px)] overflow-hidden w-full bg-[#003BE2]">
        <GridBackground></GridBackground>
        <Navbar></Navbar>
        <BannerWriting></BannerWriting>
        <DecorativeObject></DecorativeObject>
        <Circle></Circle>
      </section>


      {/* Company Logo  */}
      <section className=" companyLogo w-full relative bg-[#F5F5F6]">
                <CompanyLogo></CompanyLogo>
      </section>
      

      {/* Course Feature and Learning Section */}
      <section className=" Feature w-full relative bg-[#FFFFFF] my-[60px] md:my-[120px]">
               <Discover></Discover>
               <Course data={data}></Course>
               <Explore></Explore>
      </section>
      
      {/* Advertising Section */}
      <section className=" Feature w-full overflow-hidden relative bg-[#FFFFFF] py-[60px] md:py-[120px] ">
            <Advertise data={data[0]}></Advertise>
             <Blur></Blur>
      </section>

      {/* CTA section */}
      <section className="  CTA w-full relative overflow-hidden bg-[#003BE2] ">
             <GridBackground></GridBackground>
             <Cta></Cta>
             <FLoatingObject></FLoatingObject>
      </section>

    {/* Custom Comment Section */}
      <section className=" Feature w-full relative bg-[#FAFAFA] ">
           <CustomTestimonials></CustomTestimonials>
          
      </section>
     {/* Footer */}
     <Footer></Footer>
    </div>
  );
}
