import React from 'react'
import UpperHeader from '../components/upperheader'
import Navbar from '../components/navbar'
import Casual from '../components/filterandcasusal'
import Footer from '../components/footer'

const page = () => {
  return (
    <div>
      <UpperHeader/>
      <Navbar/>
      <Casual/>
      <Footer/>
    </div>
  )
}

export default page
