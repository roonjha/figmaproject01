import UpperHeader from '../components/upperheader'
import Navbar from '../components/navbar'
import ProductCard from '../components/ProductCard'
import ReviewsSection from '../components/Reviews'
import YouMightAlsoLike from '../components/Mightlike'
import Footer from '../components/footer'
import Bread from '../components/Bread'
import products from '@/sanity/schemaTypes/products'
import ProductPage from '../products/page'


export default function ProductDetail() {
  return (
    <div>
      <UpperHeader/>
      <Navbar onSearch={function (query: string): void {
        throw new Error('Function not implemented.')
      } }/>
      <Bread/>
      <ProductPage/>
      <ReviewsSection/>
      <YouMightAlsoLike/>
      <Footer/>

    </div>
  )
}

