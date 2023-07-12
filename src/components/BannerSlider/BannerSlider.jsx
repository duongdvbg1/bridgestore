import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/scss";
import 'swiper/css/navigation';
import './bannerSlider.scss';
import imgSlider1 from '../../assets/bannerSlider1.png';

const BannerSlider = () => {
    return (
        <div className='bannerSlider'>
            <Swiper
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                >
                <SwiperSlide>
                    <img src={imgSlider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgSlider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgSlider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgSlider1} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BannerSlider
