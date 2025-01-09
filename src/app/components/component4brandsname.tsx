import React from 'react';
import Image from 'next/image';

const Component4brandsname = () => {
  return (
    <div className="flex items-center justify-center h-[122px] w-[1525px] bg-black relative">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-between items-center relative gap-44 mr-96"> {/* Adjust the gap here */}
        <Image
          src="/vers.png"
          alt="Fashion Style"
          width={166.48} 
          height={33.16}
        />
        <Image
          src="/zara.png"
          alt="Fashion Style"
          width={166.48} 
          height={33.16}
        />
        <Image
          src="/prada.png"
          alt="Fashion Style"
          width={166.48} 
          height={33.16}
        />
        <Image
          src="/calvin.png"
          alt="Fashion Style"
          width={166.48} 
          height={33.16}
        />
      </div>
    </div>
  );
};

export default Component4brandsname;
