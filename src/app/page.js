import Circle from "@/Component/Background/Circle";
import DecorativeObject from "@/Component/Background/DecorativeObject";
import GridBackground from "@/Component/Background/gridBaground";
import BannerWriting from "@/Component/Landing/BannerWriting";
import CompanyLogo from "@/Component/Landing/CompanyLogo";
import Navbar from "@/Component/Landing/Navbar";
import { getCourse } from "@/service/courseService";
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

    </div>
  );
}
