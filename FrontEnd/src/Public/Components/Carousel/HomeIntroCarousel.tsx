import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import GermanyLanguage from "./GermanyLanguage.jpg"
import PROGRAMMING from "./PROGRAMMING.jpg"
import PersonalLearning from "./PersonalLearning.jpg"


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeIntroCarousel = () => {


    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                
                
            >





                <SwiperSlide>
                    <img className='img-fluid' src={GermanyLanguage} alt="" />
                </SwiperSlide>

                
                <SwiperSlide>
                    <img className='img-fluid' src={PROGRAMMING} alt="" />
                </SwiperSlide>

                
                <SwiperSlide>
                    <img className='img-fluid' src={PersonalLearning} alt="" />
                </SwiperSlide>

                





            </Swiper>
        </>
    );
};

export default HomeIntroCarousel;
