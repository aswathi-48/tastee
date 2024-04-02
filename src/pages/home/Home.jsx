import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDish from './SpecialDish'
import Testimonials from './Testimonials'
import Services from './Services'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDish/>
      <Testimonials/>
      <Services/>
    </div>
  )
}

export default Home