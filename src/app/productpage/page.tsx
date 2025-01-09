import UpperHeader from '../components/upperheader'
import Navbar from '../components/navbar'
import ProductCard from '../components/ProductCard'
import ReviewsSection from '../components/Reviews'
import YouMightAlsoLike from '../components/Mightlike'
import Footer from '../components/footer'
import Bread from '../components/Bread'


export default function ProductDetail() {
  return (
    <div>
      <UpperHeader/>
      <Navbar/>
      <Bread/>
      <ProductCard/>
      <ReviewsSection/>
      <YouMightAlsoLike/>
      <Footer/>

    </div>
  )
}

