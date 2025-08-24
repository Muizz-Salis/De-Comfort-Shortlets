
import React from 'react'
import Header from './Components/Header.jsx'
import HeroSection from './Components/HeroSection.jsx'
import ImageCarouselSection from './Components/ImageCarouselSection.jsx'
import Calculate from './Components/Calculate.jsx'
import BookingSection from './Components/BookingSection.jsx'
import FacilitiesSection from './Components/FacilitiesSection.jsx'
import TestimonialsSection from './Components/TestimonialsSection.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div className="overflow-fix">
      <Header />
      <HeroSection />
      <ImageCarouselSection/>
      <BookingSection/>
      <FacilitiesSection/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  )
}

export default App