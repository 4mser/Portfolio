"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import React, { useState } from "react";
import ParticleStars from "./ParticleStars";
import Planet from "./Planet";
import Projects from "./Projects";

const Slider = () => {
  const totalSlides = 3; // Define el número total de slides aquí
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <menu className="w-full h-[100dvh] relative">
      <Planet index={currentIndex} totalSlides={totalSlides} />

      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Mousewheel]}
        className="h-[100dvh]"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide className="flex justify-center items-center">
          <div className="landpage absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <h2 className="text-[11vw] text-center font-bold text-nowrap hollow-text">
              HI, IM NICO
            </h2>
            <p className="text-center text-white/80 text-nowrap w-full flex justify-center items-center gap-1">
              BUT
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-transparent bg-clip-text font-bold text-nowrap">
                AMSER
              </span>
              ON THE WEB
            </p>
          </div>
          <ParticleStars />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <section className="w-full h-[100dvh]">
            <Projects isVisible={currentIndex === 1} />
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
