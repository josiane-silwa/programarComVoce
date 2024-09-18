import './CarouselThumbs.css'
//import './CarouselThumbs.scss'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import { useState } from 'react'
import Frame from '../Frame'
import Info from '../Info'
import NavBar from '../NavBar/NavBar'
import Details from '../Details'
import Header from '../Header'
import InfoThumbs from '../InfoThumbs/index'
import RatingReview from '../RatingReview'

const CarouselThumbs = ({images}) => {
  //console.log(images)
  const [activeThumb, setActiveThumb] = useState()
  
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={false}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        
        //thumbs={{ swiper: activeThumb }} 
        thumbs={{swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null}}
        className='product-images-slider'
      >
        {
            images.map((item) => (
                <SwiperSlide 
                    className='foto' 
                    key={item.id} 
                    style={{ 
                        //height: '550px',
                        //width: '120px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `linear-gradient(black, black), url(${item.img})`, 
                        backgroundBlendMode: 'exclusion',
                    }}
                >
                    <div >
                        {/*console.log(item.img)*/}
                        <Header />
                        <Info props={item}/>
                        <Details props={item}/>
                        {/*<img src={item.img} alt="product images" />*/}
                </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
    <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={8}
        slidesPerView={2}
        modules={[Navigation, Thumbs]}
        className='product-images-slider-thumbs'
    >
        {
            images.map((item) => (
                <SwiperSlide key={item.id}>
                    <div    className="product-images-slider-thumbs-wrapper">
                        <img src={item.img} alt="product images" />
                        <div className='infoThumbs'>
                            <p>{item.classificacao}</p>
                            <p>{item.title}</p>
                            <RatingReview />
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  </>
  )

  //CarouselThumbs.propTypes = {
  //  images: PropTypes.array.isRequired
  //}

}
export default CarouselThumbs
