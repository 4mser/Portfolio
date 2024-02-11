import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Variantes fuera del componente para evitar re-creaciones innecesarias
const variants = {
  hidden: { opacity: 0, x: 300, y: -300, scale: 0.2 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0 },
};

// Variantes para h2
const h2Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
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
          className="mt-52"
        >
          <motion.h2
            className="font-medium px-6 py-5"
            variants={h2Variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // Agrega un delay a la animación del h2
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            PERSONAL PROJECTS
          </motion.h2>

          <Swiper
            spaceBetween={15}
            slidesPerView={1.8}
            centeredSlides={true}
            onSwiper={handleSwiper}
            onSlideChange={handleSlideChange}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <section className="w-full flex flex-col justify-center items-end gap-2">
                  <div className="bg-white/15 w-full flex justify-center items-center h-fit  rounded-3xl overflow-hidden">
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* {project.name} */}
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
