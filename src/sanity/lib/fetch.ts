import { createClient } from "next-sanity";

const client = createClient({
  projectId: "77aypzxg", 
  dataset: "production", 
  apiVersion: "2023-01-01",     
  useCdn: true,
});

export const fetchProducts = async () => {
  try {
    const query = `*[_type == "products"]{
      _id,
      name,
      price,
      description,
      "imageUrl": image.asset->url,
      category,
      discountPercent,
      new,
      colors,
      sizes,
      stockStatus
    }`;

    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array if an error occurs
  }
};
