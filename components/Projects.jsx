import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

const Projects = ({ isVisible }) => {
  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            spaceBetween={15}
            slidesPerView={1.8}
            centeredSlides={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {/* Aquí irían tus SwiperSlides con el contenido de cada proyecto */}
            <SwiperSlide>
              <section className="w-full h-[100dvh] flex justify-center items-center">
                <div className="bg-white/15 w-full flex justify-center items-center h-64 rounded-3xl">
                  proyecto 1
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="w-full h-[100dvh] flex justify-center items-center">
                <div className="bg-white/15 w-full flex justify-center items-center h-64 rounded-3xl">
                  proyecto 2
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className="w-full h-[100dvh] flex justify-center items-center">
                <div className="bg-white/15 w-full flex justify-center items-center h-64 rounded-3xl">
                  proyecto 3
                </div>
              </section>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Projects;
