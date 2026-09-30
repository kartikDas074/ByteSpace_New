import Circle from "@/Component/Background/Circle";
import DecorativeObject from "@/Component/Background/DecorativeObject";
import GridBackground from "@/Component/Background/gridBaground";
import BannerWriting from "@/Component/Landing/BannerWriting";
import Navbar from "@/Component/Landing/Navbar";
import { getCourse } from "@/service/courseService";
import Image from "next/image";

export default async function Home() {
   const data=await getCourse();
   console.log(data);
   console.log('i am love with a fairy tale');
  return (
    <div className=" bg-[#FFFFFF]">


      {/* Hero Section Navbar + banner */}
      <section className="relative min-h-[max(100vh,1024px)] overflow-hidden w-full  bg-[#003BE2]">
        <GridBackground></GridBackground>
        <Navbar></Navbar>
        <BannerWriting></BannerWriting>
        <DecorativeObject></DecorativeObject>
        <Circle></Circle>
      </section>
    </div>
  );
}
