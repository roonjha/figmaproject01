import Image from "next/image";
import Component4brandsname from "./components/component4brandsname";
import UpperHeader from "./components/upperheader";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import NewArrivals from "./components/newarrival";
import Bestselling from "./components/bestselling";
import BrowseByStyle from "./components/browse";
import CustomerReviews from "./components/customerreview";
import Footer from "./components/footer";

export default function Home() {
  return (   
    <div>
      <UpperHeader/>
      <Navbar/>
      <HeroSection/>
      <Component4brandsname/>
      <NewArrivals/>
      <Bestselling/>
      <BrowseByStyle/>
      <CustomerReviews/>
      <Footer/>

    </div>
    );
}
