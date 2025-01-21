import React from "react";
import UpperHeader from "../components/upperheader";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NewArrivals from "../components/newarrival";
import { fetchProducts } from "@/sanity/lib/fetch"; // Import the fetch function for products

const Page = async () => {
  // Fetch the products
  const products = await fetchProducts();

  return (
    <div>
      <UpperHeader />
      <Navbar />
      {/* Pass the fetched products to the NewArrivals component */}
      <NewArrivals products={products} />
      <Footer />
    </div>
  );
};

export default Page;
