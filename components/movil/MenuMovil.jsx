"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

function MenuMovil({ menuOpen, toggleMenu }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [subMenus, setSubMenus] = useState({
    subMenuOpen: false,
    secondSubMenuOpen: false,
    thirdSubMenuOpen: false,
  });

  const toggleSubMenu = (menuName) => {
    setSubMenus((prev) => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const item = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const containerSubMenu = {
    hidden: { height: 0, display: "hidden" },
    visible: {
      height: "auto",
      transition: {
        staggerChildren: 0.02,
        duration: 0,
      },
    },
  };

  const ItemSubMenu = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
    },
    transition: {
      duration: 0.1,
    },
  };

  const menuItems = [
    {
      title: "Sobre",
      submenu: ["- Valores y Objetivos"],
    },
    {
      title: "Soluciones",
      submenu: [
        "Sostenibilidad",
        "ExploraciÃ³n",
        "Misiones y Recompensas",
        "ConexiÃ³n Comunitaria",
        "EconomÃ­a circular",
        "MonetizaciÃ³n",
        "Impacto Ambiental",
        "AnÃ¡lisis y Datos",
      ],
    },
    {
      title: "Precios",
      submenu: [
        "Uso gratuito",
        "Planes para Empresas",
        "Planes para Creadores de Contenido",
      ],
    },
    {
      title: "Recursos",
      submenu: [
        "Eventos y Novedades",
        "Blog",
        "Testimonios",
        "Preguntas Frecuentes",
        "Ayuda y Soporte",
        "PolÃ­ticas de privacidad y tÃ©rminos",
      ],
    },
  ];

  return (
    <AnimatePresence>
      {menuOpen && (
        // Fondo
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="fixed left-0 w-full top-0 h-screen flex  bg-custom-bg bg-opacity-80 backdrop-blur-sm justify-center pt-20 lg:hidden"
        >
          <motion.div
            // Contenedor Menu
            variants={container}
            className="w-calc-submenu h-fit overflow-hidden  rounded-md p-px "
            style={{
              background: "var(--degree)",
              animation: "gradient 7s ease infinite",
              backgroundSize: "800% 30%",
            }}
          >
            <div className="bg-custom-bg rounded-md max-h-[60vh] select-none h-auto overflow-auto">
              <motion.ul
                variants={container}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="py-5 text-md px-4"
              >
                {menuItems.map((menuItem, index) => (
                  <div key={index}>
                    <motion.li
                      className={`flex justify-between w-full items-center p-[7px] ${
                        subMenus[menuItem.title]
                          ? "bg-custom" // Fondo activo
                          : "hover:bg-custom" // Fondo hover
                      }`}
                      style={{
                        borderBottom: "1px solid var(--border)",
                      }}
                      variants={item}
                      onClick={() => toggleSubMenu(menuItem.title)}
                    >
                      <p
                        className={`text-sm font-medium ${
                          subMenus[menuItem.title]
                            ? "text-custom-active" // Texto activo
                            : "text-stone-300" // Texto normal
                        }`}
                      >
                        {menuItem.title}
                      </p>
                      <Icon
                        icon="ep:arrow-up"
                        rotate={subMenus[menuItem.title] ? 0 : 2} // Gira el Ã­cono si estÃ¡ activo
                        className="p-[2px]"
                      />
                    </motion.li>
                    {subMenus[menuItem.title] && (
                      <motion.ul
                        variants={containerSubMenu}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="p-2 text-xs text-stone-50 opacity-100 flex gap-2 flex-col overflow-hidden"
                      >
                        {menuItem.submenu.map((subItem, subIndex) => (
                          <motion.li key={subIndex} variants={ItemSubMenu}>
                            {subItem}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                ))}
                <motion.li
                  className={`flex justify-between w-full items-center p-[7px] ${
                    // Estilos para el Ãºltimo elemento (QuiÃ©nes Somos)
                    "text-stone-300 text-sm font-medium"
                  }`}
                  style={{
                    borderBottom: "1px solid var(--border)",
                  }}
                  variants={item}
                >
                  QuiÃ©nes Somos
                </motion.li>
                <motion.li
                  className={`flex justify-between w-full items-center p-[7px] ${
                    // Estilos para el Ãºltimo elemento (Contacto)
                    "text-stone-300 text-sm font-medium"
                  }`}
                  /* style={{
                    borderBottom: "1px solid var(--border)",
                  }} */
                  variants={item}
                >
                  Contacto
                </motion.li>
                {/* <motion.li
                  className={`flex justify-between w-full items-center p-[7px] ${
                    // Estilos para el Ãºltimo elemento (Trabaja con Nosotros)
                    "text-stone-300 text-sm font-medium"
                  }
                `}
                  variants={item}
                >
                  Trabaja con Nosotros
                </motion.li> */}
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuMovil;
