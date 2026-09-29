import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="  w-[90%] md:w-[80%]  mx-auto mt-8.75 mb-12  ">
      <div className="flex justify-between items-center">
        <div className="flex gap-1.5 justify-center items-center">
          <Image
            src="/Asset/Logo.png"
            alt="ByteSpace Logo"
            width={30}
            height={30}
          />
          <p className=" font-clash text-2xl text-center  font-bold  text-[#F5F5F6] ">
            ByteSpace
          </p>
        </div>

        <div className="flex gap-2 justify-center items-center cursor-pointer">
          <Link
            href="/"
            className="font-satoshi text-[16px] text-[#F5F5F6] font-medium"
          >
            Home
          </Link>

          <Link
            href="/courses"
            className="font-satoshi text-[16px] text-[#F5F5F6] font-medium"
          >
            Courses
          </Link>

          <Link
            href="/creator"
            className="font-satoshi text-[16px] text-[#F5F5F6] font-medium"
          >
            Creator
          </Link>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <div>
            <p className=" font-satoshi text-[16px] text-[#F5F5F6] font-regular text-center">
              Sign In
            </p>
          </div>
          <div>
            <p className=" font-satoshi text-[16px] text-[#F5F5F6] font-regular text-center">
              Join Us
            </p>
          </div>
          <div>
            <Image
              src="/Asset/signup.png"
              alt="ByteSpace Logo"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
