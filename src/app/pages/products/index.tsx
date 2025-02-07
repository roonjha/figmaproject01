// pages/products/index.tsx

import { fetchProducts } from "@/sanity/lib/fetch";
import { useEffect, useState } from "react";

// Define the Product type
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  discountPercent: number;
  new: boolean;
  colors: string[];
  sizes: string[];
  stockStatus: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsList = await fetchProducts();
      setProducts(productsList);
    };

    getProducts();
  }, []);

  if (!products.length) return <div>Loading products...</div>;

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            {/* You can display more details like category, discount, stock status, etc. */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
