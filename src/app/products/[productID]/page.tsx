import { SanityClient } from "sanity"; // Ensure this is correctly initialized
import { Product } from "@/sanity/lib/type"; // Ensure this type is correctly defined
import { useState, useEffect } from "react";

// Define the props interface for the component
interface ProductDetailsProps {
  params: {
    productId: string;
  };
}

// Function to fetch product details from Sanity
const fetchProductDetails = async (productId: string): Promise<Product | null> => {
  try {
    const query = `*[_type == "product" && _id == $productId][0]{
      _id,
      name,
      price,
      imageUrl,
      stockStatus,
      description
    }`;
    const product = await SanityClient.fetch(query, { productId });
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

// Function to generate static params for static site generation (SSG)
export async function generateStaticParams() {
  const query = `*[_type == "product"]{ _id }`;
  const products = await SanityClient.fetch<{ _id: string }[]>(query);
  return products.map((product) => ({
    productId: product._id,
  }));
}

// Main component to display product details
export default function ProductDetails({ params }: ProductDetailsProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      console.log("Product ID:", params.productId); // Debugging
      const data = await fetchProductDetails(params.productId);
      if (data) {
        setProduct(data);
      } else {
        setError("Product not found");
      }
      setLoading(false);
    };
    getProduct();
  }, [params.productId]);

  // Display loading state
  if (loading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  // Display error state
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // Display if no product is found
  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  // Render the product details
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      {product.imageUrl ? (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover mb-4"
        />
      ) : (
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}
      <p className="text-gray-700 mb-2">Price: ${product.price}</p>
      <p
        className={`mb-2 ${
          product.stockStatus === "inStock" ? "text-green-600" : "text-red-600"
        }`}
      >
        {product.stockStatus === "inStock" ? "In Stock" : "Out of Stock"}
      </p>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
}