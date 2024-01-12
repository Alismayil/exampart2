import React from 'react'
import './header.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import {Autoplay,    Navigation } from 'swiper/modules';


function Header() {
  return (
    <header>
      <Swiper navigation={true}
      autoplay={{
        delay: 1200,
        disableOnInteraction: false,
      }}
         modules={[Autoplay , Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="sliderBox1">
            <span>Fixed-Height Slider</span>
            <p>Excellent bouquets for you</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderBox2">
            <span>Floral</span>
            <p>Excellent bouquets for you</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderBox3">
            <span>Floral</span>
            <p>Excellent bouquets for you</p>
          </div>
        </SwiperSlide>
      </Swiper>

    </header>
  )
}

export default Header