// src/sanity/lib/type.ts

export interface Product {
  _id: string; // Unique product ID from Sanity
  name: string;
  price: number;
  description: string;
  stockStatus: 'inStock' | 'outOfStock'; // Better to define strict values
  imageUrl?: string; // Optional if the image is nested inside `image.asset.url`

  image: {
    asset: {
      url: string;
    };
  };

  category: 'tshirt' | 'short' | 'jeans' | 'hoodie' | 'shirt';
  discount?: number; // Optional discount (percentage or fixed)
  discountPercent?: number; // If it's a percentage discount
  new: boolean; // Whether the product is new
  colors: string[]; // List of available colors
  sizes: string[]; // List of available sizes
  rating?: number; // Rating out of 5 (optional)
}
