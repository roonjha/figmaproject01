// 'use client'

// import { useParams } from "next/navigation"; // Correct way to get route params in App Router
// import { useState, useEffect } from "react";
// import { Product } from "@/sanity/lib/type";
// import { SanityClient } from "sanity";

// // Function to fetch product details from Sanity
// const fetchProductDetails = async (productId: string): Promise<Product | null> => {
//   try {
//     const query = `*[_type == "product" && _id == $productId][0]{
//       _id,
//       name,
//       price,
//       imageUrl,
//       stockStatus,
//       description
//     }`;
//     const product = await SanityClient.fetch(query, { productId });
//     return product || null;
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return null;
//   }
// };

// // Main component
// export default function ProductDetails() {
//   const { productId } = useParams(); // ✅ Get the product ID from the URL
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!productId || typeof productId !== "string") return;

//     const getProduct = async () => {
//       const data = await fetchProductDetails(productId);
//       if (data) {
//         setProduct(data);
//       } else {
//         setError("Product not found");
//       }
//       setLoading(false);
//     };

//     getProduct();
//   }, [productId]);

//   if (loading) return <div className="text-center py-6">Loading...</div>;
//   if (error) return <div className="text-center text-red-500">{error}</div>;
//   if (!product) return <div className="text-center text-red-500">Product not found</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//       {product.imageUrl ? (
//         <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4" />
//       ) : (
//         <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
//           <span className="text-gray-500">No Image Available</span>
//         </div>
//       )}
//       <p className="text-gray-700 mb-2">Price: ${product.price}</p>
//       <p className={`mb-2 ${product.stockStatus === "inStock" ? "text-green-600" : "text-red-600"}`}>
//         {product.stockStatus === "inStock" ? "In Stock" : "Out of Stock"}
//       </p>
//       <p className="text-gray-600">{product.description}</p>
//     </div>
//   );
// }
