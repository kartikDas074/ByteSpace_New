import DecorativeObject from "@/Component/Background/DecorativeObject";
import GridBackground from "@/Component/Background/gridBaground";
import BannerWriting from "@/Component/Landing/BannerWriting";
import Navbar from "@/Component/Landing/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[#FFFFFF]">


      {/* Hero Section Navbar + banner */}
      <section className="relative min-h-[max(100vh,1024px)] w-full overflow-hidden bg-[#003BE2]">
        <GridBackground></GridBackground>
        <Navbar></Navbar>
        <BannerWriting></BannerWriting>
        <DecorativeObject></DecorativeObject>
      </section>
    </div>
  );
}
