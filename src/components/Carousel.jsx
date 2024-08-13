import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import carousel1 from '../assets/carousel1.webp'
import carousel2 from '../assets/carousel2.webp'
import carousel3 from '../assets/carousel3.webp'

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container w-full container mx-auto my-5">
            <Slider {...settings}>
                <div className="w-full outline-none">
                    <img src={carousel1} className="w-full h-52 md:h-96 object-cover" alt="carousel1-img" />
                </div>
                <div className="w-full outline-none">
                    <img src={carousel2} className="w-full h-52 md:h-96 object-cover" alt="carousel2-img" />
                </div> 
                <div className="w-full outline-none">
                    <img src={carousel3} className="w-full h-52 md:h-96 object-cover" alt="carousel3-img" />
                </div>
            </Slider>
        </div>
    )
}