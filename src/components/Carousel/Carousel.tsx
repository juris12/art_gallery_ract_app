import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Carousel.style.scss'
import { Link } from 'react-router-dom'
import { artworkType } from '../../types'

type CarouselProps = {
  art: artworkType[];
};

const Carousel = ({ art }: CarouselProps) => {
  return (
    <Swiper 
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper" 
      spaceBetween={80}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {art.map((artwork) => (
        <SwiperSlide key={artwork.objectNumber}>
          <Link to={`/gallery/${artwork?.objectNumber}`} className='carusel_card'>
            <img src={artwork?.webImage?.url} alt={artwork?.title} style={{ width: '100%', height: 'auto' }} />
            <p>{artwork?.title}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

