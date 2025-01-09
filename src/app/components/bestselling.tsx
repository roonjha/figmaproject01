import React from 'react';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
};

const Bestselling: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'T-shirt with Tape Details',
      price: 120,
      rating: 4.5,
      image: '/tshirt.png',
    },
    {
      id: 2,
      name: 'Skinny Fit Jeans',
      price: 240,
      rating: 3.5,
      image: '/skinny.png',
    },
    {
      id: 3,
      name: 'Checkered Shirt',
      price: 180,
      rating: 4.5,
      image: '/check.png',
    },
    {
      id: 4,
      name: 'Sleeve Striped T-shirt',
      price: 130,
      rating: 4.0,
      image: '/strip.png',
    },
  ];

  return (
    <section className="bg-[#F2F0F1]">
      <div className="container mx-auto px-4">
      <hr className="border-teal-500  mx-auto" />
        <h2 className="text-4xl text-green-700 font-bold text-center mb-8" style={{ fontFamily: 'Integral CF,  sans-serif', fontWeight: 'bold' }}>
          TOP SELLING
          <hr className="border-teal-500  mx-auto" />
        </h2>
        
        
        
        <div className="grid sm:grid-cols-4  gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-200 rounded-lg shadow-lg p-4 text-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">${product.price}</p>
              <p className="text-yellow-500">Rating: {product.rating} stars</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-black text-white py-2 px-4 rounded-full">View All</button>
        </div>
        <br></br>
  
      
      </div>
      
      </section>
  );
};

export default Bestselling;
