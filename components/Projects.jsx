import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Variantes fuera del componente para evitar re-creaciones innecesarias
const variants = {
  hidden: { opacity: 0, x: 300, scale: 0.2 },
  visible: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: 300, scale: 0.2 },
};

const projects = [
  {
    id: 1,
    name: "Entropía",
    image: "https://app-valdi.s3.amazonaws.com/entropia/logonuevo-01.png",
  },
  {
    id: 2,
    name: "Entropía Research Lab",
    image: "https://app-valdi.s3.amazonaws.com/entropia/logonew-03.png",
  },
  {
    id: 3,
    name: "Xplorers",
    image: "https://app-valdi.s3.amazonaws.com/xplorers/xplorers_1.png",
  },
  // Agrega más proyectos según sea necesario
];

const Projects = ({ isVisible }) => {
  // Handler optimizado si es necesario
  const handleSwiper = React.useCallback((swiper) => {
    console.log(swiper);
  }, []);

  const handleSlideChange = React.useCallback(() => {
    console.log("slide change");
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <Swiper
            spaceBetween={15}
            slidesPerView={1.8}
            centeredSlides={true}
            onSwiper={handleSwiper}
            onSlideChange={handleSlideChange}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <section className="w-full h-[100dvh] flex flex-col justify-center items-end gap-2">
                  <div className="bg-white/15 w-full flex justify-center items-center h-72 rounded-3xl overflow-hidden">
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {project.name}
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Projects;
