"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules

import React from "react";
import ParticleStars from "./ParticleStars";

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
          <ParticleStars />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <section className="w-full h-[100dvh] flex justify-center items-center">
            j2
          </section>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <section className="w-full h-[100dvh] flex justify-center items-center">
            j3
          </section>
        </SwiperSlide>
      </Swiper>
    </menu>
  );
};

export default Slider;
