import { useState } from 'react'
import ProtoTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import { productImages } from '../../assets'
import { countries } from './Helpers/CarouselData'
const CarouselCard = (props) => {
    const [activeThumb, setActiveThumb] = useState()
    
    {console.log('ola', productImages[0])}

  return (
    <>
      <Swiper 
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        className='product-images-slider'
      >
        {/*{props.images.map((item, index) => (*/}
        {countries.map((item, index) => (
            <SwiperSlide key={index}>
                <img src={item.img} alt="product images" />
            </SwiperSlide>
        ))}
      </Swiper>
      <Swiper 
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className='product-images-slider-thumbs'
      >
        {countries.map((item, index) => (
            <SwiperSlide key={index}>
                <div className='product-images-slider-thumbs-wrapper'>
                    <img src={item.img} alt="product immages" />
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

CarouselCard.ProtoTypes = {
    images: ProtoTypes.array.isRequired
}

export default CarouselCard
