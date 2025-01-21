import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-[#F2F0F1] py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Integral CF, sans-serif' }}
          >
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-gray-600 mb-6">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-full text-lg hover:bg-gray-800">
            Shop Now
          </button>
        </div>

        <div className="w-[60%] mr-[8%] flex flex-col items-center relative">
  {/* Image */}
  <Image
    src="/rectangle.png" // Ensure this file is placed in your public folder
    alt="Fashion Style"
    width={800} // Adjust dimensions based on your requirement
    height={50}
    className="rounded-lg shadow-slate-900 object-fill object-bottom"
  />

  {/* Text Below the Image with Hover and Text Shadow Effects */}
  <div className="mt-4 w-full text-center">
    <p className="text-gray-700 text-sm sm:text-base hover:text-black hover:scale-105 transition-all duration-300 shadow-md">
    
    </p>
  </div>
     

          {/* Decorative Stars */}
          <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-black"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div className="absolute bottom-4 right-10 transform translate-x-1/2 translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-black"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
