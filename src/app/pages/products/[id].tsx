"use client";

import { useSearchParams } from "next/navigation";
import { client } from "@/sanity/lib/sanity"; // Ensure the correct path
import { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Get the product ID from the URL

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const fetchedProduct = await client.fetch(
            `*[_type == "products" && _id == $id][0]{
              _id,
              name,
              price,
              description,
              "imageUrl": image.asset->url
            }`,
            { id } // Pass the product ID here
          );

          if (fetchedProduct) {
            setProduct(fetchedProduct); // Set the product data
          } else {
            setError("Product not found");
          }
        } catch (err) {
          console.error("Error fetching product:", err); // Log the error
          setError("Failed to fetch product. Please try again later.");
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>No product data available</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500} // Adjust the width
        height={500} // Adjust the height
        priority // Optimize loading
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
