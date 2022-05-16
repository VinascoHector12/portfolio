// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";
//import '../swiper-bundle.min.css';

import img1 from './portfolio1.jpg';

// import required modules
import { Pagination } from "swiper";

function Carousel() {
    return (
        <>
        <h2 class="section__title">Portfolio</h2>
        <span class="section__subtitle">Most recent work</span>
        
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>                
                    <div class="portfolio__content">
                        <img src={img1} alt="" class="portfolio__img"/>

                        <div class="portfolio__data">
                            <h3 class="portfolio__title">Modern Website</h3>
                            <p class="portfolio__description">Website adaptable to all device, with ui component and animated interactions.</p>
                            <a href="#" class="button button--flex button--small portfolio__button">
                            Demo
                            <i class="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </>
    );
}

export default Carousel;