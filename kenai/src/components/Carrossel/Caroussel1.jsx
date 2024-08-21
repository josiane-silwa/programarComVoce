import React from 'react'
import img1 from '../../assets/img/01.jpg'
import img2 from '../../assets/img/02.jpg'
import img3 from '../../assets/img/03.jpg'
import styles from './Carrossel.module.css'

const Caroussel1 = () => {
    document.addEventListener( 'DOMContentLoaded', function () {
        new Splide( '#thumbnail-carousel', {
              fixedWidth: 100,
              fixedHeight: 60,
              gap       : 10,
              rewind    : true,
              pagination: false,
        } ).mount();
      } );

  return (
    <div>
        <div className={styles.splide__track}>
            <ul className={styles.splide__list}>
                <li className={styles.splide__slie}>
                    <img src={img1} alt=""/>
              </li>
                <li className={styles.splide__slide}>
                    <img src={img2} alt=""/>
                </li>
                <li className={styles.splide__slide}>
                    <img src={img3} alt=""/>
                </li>
            </ul>
        </div>    
    </div>
  )
}

export default Caroussel1
