import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const testArr = ["1", "2", "3", "4"];

export default function MainSlider({ props }) {
    const params = {
        containerClass: "main_slider",
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next.bt",
            prevEl: ".swiper-button-prev.bt",
        },
    };

    return (
        <>
            <Swiper {...params}>
                {testArr.map((e, i) => (
                    <div key={i}>Slide {e}</div>
                ))}
            </Swiper>
        </>
    );
}
