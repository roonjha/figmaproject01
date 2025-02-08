import UpperHeader from '../components/upperheader'
import Navbar from '../components/navbar'
import ReviewsSection from '../components/Reviews'
import YouMightAlsoLike from '../components/Mightlike'
import Footer from '../components/footer'
import Bread from '../components/Bread'
import ProductPage from '../pages/products/[id]' // This might cause an issue

export default function ProductDetail() {
  return (
    <div>
      <UpperHeader />
      <Navbar onSearch={(query: string) => { console.log("Searching for:", query); }} />
      <Bread />
      <ProductPage />
      <ReviewsSection />
      <YouMightAlsoLike />
      <Footer />
    </div>
  );
}
