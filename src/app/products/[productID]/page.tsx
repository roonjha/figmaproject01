import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "@/sanity/lib/sanity"; // Make sure this is the correct import

// This function fetches all the product IDs for static generation
export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all products to get the product IDs
  const products = await client.fetch(`*[_type == "products"]{ _id }`);
  
  // Generate paths for each product
  const paths = products.map((product: { _id: string }) => ({
    params: { productId: product._id }, // Mapping product IDs to paths
  }));

  return { paths, fallback: "blocking" }; // Block until all pages are generated
};

// This function fetches the details of a specific product using the productId
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { productId } = params!; // Get the productId from the URL

  // Fetch product details using the productId
  const product = await client.fetch(
    `*[_type == "products" && _id == $productId][0]`,
    { productId }
  );

  return {
    props: { product }, // Pass the product details as props
  };
};

const ProductDetailPage = ({ product }: { product: any }) => {
  if (!product) {
    return <div>Product not found</div>; // Fallback if product is not found
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Sizes: {product.sizes?.join(", ")}</p>
      <p>Colors: {product.colors?.join(", ")}</p>
      <p>Discount: {product.discountPercent}%</p>
    </div>
  );
};

export default ProductDetailPage;
