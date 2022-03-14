import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar.jpg'
import AVTR2 from '../../assets/avatar.jpg'
import AVTR3 from '../../assets/avatar.jpg'
import AVTR4 from '../../assets/avatar.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar: AVTR1,
    name: 'Hieu Vo Trung',
    review: 'Đây gọi là review gì đó những không phải review bla bla các thứ, ây gọi là review gì đó những không phải review bla bla các thứ'
  },
  {
    avatar: AVTR2,
    name: 'Trung Hieu Vo',
    review: 'Đây gọi là review gì đó những không phải review bla bla các thứ, ây gọi là review gì đó những không phải review bla bla các thứ'
  },
  {
    avatar: AVTR3,
    name: 'Vo Trung Hieu',
    review: 'Đây gọi là review gì đó những không phải review bla bla các thứ, ây gọi là review gì đó những không phải review bla bla các thứ'
  },
  {
    avatar: AVTR4,
    name: 'Hieu Vo Ne',
    review: 'Đây gọi là review gì đó những không phải review bla bla các thứ, ây gọi là review gì đó những không phải review bla bla các thứ'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testinomials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}

      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials