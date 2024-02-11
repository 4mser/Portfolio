"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import React, { useState, useRef } from "react";
import ParticleStars from "./ParticleStars";
import Planet from "./Planet";
import Projects from "./Projects";
import { motion, AnimatePresence } from "framer-motion"; // Asegúrate de importar AnimatePresence
import ButtonMenu from "./movil/ButtonMenu";
import ButtonDemo from "./ButtonDemo";

const Slider = () => {
  const totalSlides = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null); // Crea la referencia

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  // Función para cambiar al segundo slide
  const goToSecondSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(1); // Índices de slide son base 0
    }
  };

  // Define las variantes de animación para landpage
  const landpageVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 100 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const pVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
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
          {/* AnimatePresence para controlar la entrada y salida basada en el currentIndex */}
          <AnimatePresence>
            {currentIndex === 0 && (
              <motion.div
                className="landpage absolute z-40 top-1/4 -translate-y-1/4 w-full"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={landpageVariants}
                transition={{ duration: 0.3, delay: 0.3 }}
                key="landpage" // Añade una key para asegurar la correcta animación
              >
                <h2 className="text-[11vw] text-center font-bold text-nowrap hollow-text">
                  HI, I{"'"}M NICO
                </h2>
                <motion.p
                  variants={pVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-center text-white/80 text-nowrap w-full flex justify-center items-center gap-1"
                >
                  BUT
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-transparent bg-clip-text font-bold text-nowrap">
                    AMSER
                  </span>
                  ON THE WEB.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
          <ButtonDemo goToSecondSlide={goToSecondSlide} />
          <ParticleStars />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center"></SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <section className="w-full">
            <Projects isVisible={currentIndex === 2} />
          </section>
        </SwiperSlide>
      </Swiper>
    </menu>
  );
};

export default Slider;
