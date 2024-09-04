import img1 from '../../assets/img/shang-chi.png'
import img2 from '../../assets/img/wishDragon.png'
//import RatingReview from '../RatingReview'
import './Carousel1.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import CarouselCard from './CarouselCard1'
import { productImages } from '../../assets'

const Carrossel = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
                width: '500px',
                backgroundColor: '#fff',
                padding: '20px'
      }}>
        <CarouselCard images={productImages} />
      </div>
    </div>
  )
}

export default Carrossel
