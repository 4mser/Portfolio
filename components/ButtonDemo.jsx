/* "use client";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion"; // Asegúrate de importar AnimatePresence

function ButtonDemo({ isVisible }) {
  const buttonVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      {isVisible && (
        <motion.div
          variants={buttonVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1.5 }}
          className="p-px mt-5 z-40  overflow-hidden  w-fit  group rounded-full  shadow-custom2 lg:shadow-custom3 lg:hover:shadow-custom2 xl:-bottom-20"
          style={{
            background: "var(--degree)",
            animation: "gradient 7s ease infinite",
            backgroundSize: "200% 30%",
          }}
        >
          <p className="bg-custom-btn lg:bg-custom-bg text-stone-200 w-full h-full rounded-full text-xl font-light hover:bg-custom-btn transition duration-300  py-1 px-7 flex flex-row whitespace-nowrap items-center gap-2 group-hover:text-white   xl:py-2.5 xl:px-9 ">
            Descargar cv
            <Icon
              icon="solar:arrow-up-linear"
              rotate={1}
              className="scale-110  transition-transform group-hover:translate-x-[7px] "
            />
          </p>
        </motion.div>
      )}
    </>
  );
}

export default ButtonDemo;
 */

import { Icon } from "@iconify/react";

function ButtonDemo() {
  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
      <button className="absolute z-50 bottom-28 left-1/2 -translate-x-1/2">
        <Icon
          icon="solar:arrow-up-linear"
          rotate={2}
          scale={2}
          className="transition-transform  animate-bounce"
          style={{
            animation: "bounce 2s infinite",
          }}
        />
      </button>
    </>
  );
}

export default ButtonDemo;
