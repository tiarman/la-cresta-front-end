import React from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SingleMember from './SingleMember';
import './LineDrowing.css'
import Fade from 'react-reveal/Fade';


SwiperCore.use([EffectCoverflow,Pagination]);

const teamSlide = [
    {
        id:1,
        img:'https://picsum.photos/id/1015/1000/600/'
    },
    {
        id:2,
        img:'https://picsum.photos/id/1019/1000/600/'
    },
    {
        id:3,
        img:'https://picsum.photos/id/1018/1000/600/'
    },
    {
        id:2,
        img:'https://picsum.photos/id/1019/1000/600/'
    }
]
const LineDrowing = () => {
    return (
        <section className="team-container" id="about">
            <Fade top>
           <h3>THE LINE DROWING</h3>
           <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nulla! Lorem ipsum dolor sit</small></p>
           </Fade>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true}   
             autoplay={{  delay: 1000, disableOnInteraction: false}} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
          >
                {
                        teamSlide.map(team => {
                            return(
                                <SwiperSlide  key={team.id}>
                                    <SingleMember key={team.id} team={team} />
                                </SwiperSlide>
                            )
                        })
                }
            
          
            </Swiper>
       </section>
    );
};

export default LineDrowing;