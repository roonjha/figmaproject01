import React from 'react'
import UpperHeader from '../components/upperheader'
import Navbar from '../components/navbar'
import Cart from '../components/cart'
import Footer from '../components/footer'

const page = () => {
  return (
    <div>
    <UpperHeader/>
    <Navbar/>
    <Cart/>
    <Footer/>
    </div>
  )
}

export default page
