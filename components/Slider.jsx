"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import required modules

import React from "react";

const Slider = () => {
  return (
    <menu className="w-full h-[100dvh]">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        className=" h-[100dvh]"
      >
        <SwiperSlide className="flex justify-center items-center">
          Slider 1
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          Slide 3
        </SwiperSlide>
      </Swiper>
    </menu>
  );
};

export default Slider;
