import React from "react";
import Link from "next/link"; // Import Link from next/link
import { HiOutlineXMark } from "react-icons/hi2";

const UpperHeader = () => {
  return (
    <div className="flex items-center justify-center h-[38px] w-full bg-black relative">
      <span className="text-white">
        Sign up and get 20% off your first order.
        <Link href="/auth/signUp" className="underline ml-2"> Sign Up Now</Link>
        <Link href="/auth/logIn" className="underline ml-2"> Log in</Link>
      </span>

      <HiOutlineXMark 
        className="text-white cursor-pointer absolute right-[50px]" 
        size={23} 
      />
    </div>
  );
};

export default UpperHeader;
