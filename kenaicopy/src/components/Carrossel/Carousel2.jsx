import React, { useState } from 'react'
import styles from './Carousel.module.css'
import { countries } from './Helpers/CarouselData'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Carousel = () => {

    const [currImg, setCurrImg] = useState(0)
    const goToSlide = (imagesIndex) => {
        setCurrImg(imagesIndex);
      };

  return (
    <div className={styles.carousel}>
        <div className={styles.carouselInner} 
            style={{backgroundImage: `url(${countries[currImg].img})`}}>

            <div className={styles.left} 
                onClick={() => {
                    currImg > 0 && setCurrImg(currImg - 1)
                }}>
                <FaArrowLeft style={{ fontSize: 30 }}/>
            </div>
            
            {<div className={styles.center}>
                {/*<h1>{images[currImg].title}</h1>
                <p>{images[currImg].subtitle}</p>*/}
            </div>}

            <div className={styles.right}
                onClick={() => {
                    currImg < countries.length -1 &&  setCurrImg(currImg + 1)
                }}>
                <FaArrowRight style={{ fontSize: 30 }}/>
            </div>
            
        </div>
        <div className={styles.dotsContainerStyles}>
            {countries.map((slide, imagesIndex) => (
                <div
                    className={styles.dotStyle}
                    key={imagesIndex}
                    onClick={() => goToSlide(imagesIndex)}
                >
                    ●
                </div>
            ))}
        </div>
    </div>
  )
}

export default Carousel
