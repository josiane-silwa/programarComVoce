import { useState, useEffect } from 'react'
import CarouselItem from './CarouselItem'
import styles from './Carousel.module.css'
import { countries } from '../Helpers/CarouselData'
import CarouselControl from './CarouselControl'

const CarouselContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : countries.length - 1;
    setCurrentSlide(index);
  }
  
  const next = () => {
    const index = currentSlide < countries.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(currentSlide => currentSlide < countries.length - 1 ? currentSlide + 1 : 0)
    }, 3000)

    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className={styles.carousel}>
        <div className={styles.carouselInner}
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
            {countries.map((image, index) => (
                <CarouselItem countries={image} key={index}/>
            ))}
        </div>
        <CarouselControl prev={prev} next={next}/>
    </div>
  )
}

export default CarouselContainer
