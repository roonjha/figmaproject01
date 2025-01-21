import { client } from "@/sanity/lib/sanity";
import Link from "next/link";

// Define the Product type
interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductPage = async () => {
  // Fetch the product list from Sanity
  const products: Product[] = await client.fetch(
    `*[_type == "products"]{
      _id,
      name,
      price,
      "imageUrl": image.asset->url
    }`
  );

  if (!products || products.length === 0) {
    return <p>No products available</p>; // Handle empty or undefined product list
  }

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <Link href={`/product/${product._id}`}>
              <a>View Details</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
