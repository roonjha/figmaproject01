// app/product/[productId]/generateStaticParams.ts

import { client } from "@/sanity/lib/sanity";

export async function generateStaticParams() {
  // Fetch all product IDs from Sanity
  const products = await client.fetch(`*[_type == "products"]{ _id }`);

  // Map over products and return each product's ID for the dynamic route
  return products.map((product: { _id: string }) => ({
    productId: product._id,
  }));
}
