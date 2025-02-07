import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const UpperHeader = () => {
  return (
    <div className="flex items-center justify-center h-[38px] w-full bg-black relative">
      <span className="text-white">
        Sign up and get 20% off your first order.
        <a className="underline ml-2" href="/auth/signUp"> Sign Up Now</a>
        <a className="underline ml-2" href="/auth/logIn"> Log in</a>
      </span>

      <HiOutlineXMark 
        className="text-white cursor-pointer absolute right-[50px]" 
        size={23} 
      />
    </div>
  );
};

export default UpperHeader;
