import GridBackground from "@/Component/Background/gridBaground";
import Navbar from "@/Component/Landing/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[#FFFFFF]">
      {/* Hero Section Navbar + banner */}
      <section className="relative overflow-hidden w-full min-h-screen  max-h-360 bg-[#003BE2] ">
        <GridBackground></GridBackground>
        <Navbar></Navbar>
      </section>
    </div>
  );
}
