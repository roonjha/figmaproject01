import React from 'react';
import Image from 'next/image';

const CustomerReviews = () => {
  return (
    <div className="mt-20">
      {/* Title */}
      <h2 className="text-left ml-[9%] text-4xl font-extrabold mb-10">OUR HAPPY CUSTOMERS</h2>

      {/* Grid of Images with Equal Gaps */}
      <div className="">
        <div className="grid grid-cols-5 gap-5"> {/* Adjusted gap to 2 */}
          <Image
            src="/Frame1.png"
            alt="Customer Frame 1"
            width={62}
            height={82}          
            />
          <Image
            src="/Frame2.png"
            alt="Customer Frame 2"
            width={400}
            height={240}
          />
          <Image
            src="/Frame 3.png"
            alt="Customer Frame 3"
            width={400}
            height={240}
          />
          <Image
            src="/Frame 4.png"
            alt="Customer Frame 4"
            width={400}
            height={240}
          />
          <Image
            src="/Frame5.png"
            alt="Customer Frame 5"
            width={62}
            height={82}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
