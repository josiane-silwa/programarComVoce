import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
//import './App.css'
import CarouselThumbs from "./CarouselThumbs"
import { productImages } from '../../assets/'
import React from 'react'

const index = () => {

  return (
        <div style={{
          height: '100vh',
          //width: '400px',
          paddingTop: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto'
        }}>
          <div style={{
                    width: '400px',
                    backgroundColor: '#fff',
                    padding: '20px'
                }}>
            <CarouselThumbs images={productImages}/>
          </div>
        </div>
  )
}

export default index
