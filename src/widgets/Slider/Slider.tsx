import { Button } from '@mui/material';
import { NavLink } from 'react-router';
import { useNav } from '@App/context/NavContext';

import './Slider.css';

// swiper
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper css
import 'swiper/css';
import 'swiper/css/pagination';

export const Slider = () => {
  const { setActive } = useNav();

  return (
    <section className='Slider'>
      <div className='Slider__slides'>
        <Swiper
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          speed={900}
          modules={[ Autoplay, Pagination, A11y]}
          spaceBetween={0}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className='Slider__slide1'>
              <div className='Slider__card'>
                <span className='Slider__discount'>
                  25% OFF
                </span>
                <span className='Slider__header'>
                  Sound That Moves You
                </span>
                <span className='Slider__about'>
                  Crystal-clear wireless headphones with industry-leading noise cancellation.
                </span>
                <span className='Slider__value'>
                  <span className='Slider__discountValue'>$299</span>
                  <span className='Slider__mainValue'>$399</span>
                  <span className='Slider__star'>★4.8</span>
                </span>
                <Button onClick={() => setActive('collection')} component={NavLink} to='/collection' className="Slider__button" variant="contained">
                  Shop Now →
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Slider__slide2'>
              <div className='Slider__card'>
                <span className='Slider__discount'>
                  25% OFF
                </span>
                <span className='Slider__header'>
                  Power In Your Hands
                </span>
                <span className='Slider__about'>
                  Next-gen smartphones with stunning cameras and blazing-fast performance.
                </span>
                <span className='Slider__value'>
                  <span className='Slider__discountValue'>$899</span>
                  <span className='Slider__mainValue'>$1199</span>
                  <span className='Slider__star'>★4.7</span>
                </span>
                <Button onClick={() => setActive('collection')} component={NavLink} to='/collection' className="Slider__button" variant="contained">
                  Shop Now →
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Slider__slide3'>
              <div className='Slider__card'>
                <span className='Slider__discount'>
                  29% OFF
                </span>
                <span className='Slider__header'>
                  Timeless Elegance
                </span>
                <span className='Slider__about'>
                  Luxury watches crafted with precision to elevate your everyday style.
                </span>
                <span className='Slider__value'>
                  <span className='Slider__discountValue'>$499</span>
                  <span className='Slider__mainValue'>$699</span>
                  <span className='Slider__star'>★4.9</span>
                </span>
                <Button onClick={() => setActive('collection')} component={NavLink} to='/collection' className="Slider__button" variant="contained">
                  Shop Now →
                </Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};