import React from 'react'
import { CardCarousel } from '../components/CardCarousel'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'

const Services = () => {
  const images = [
    { src: card1, alt: "Image 1" },
    { src: card2, alt: "Image 2" },
    { src: card3, alt: "Image 3" },
  ]
  
  return (
    <div className="pt-40 bg-greybg w-full">
      <CardCarousel
        images={images}
        autoplayDelay={7000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  )
}

export default Services