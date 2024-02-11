"use client";
import React, { useState } from "react";
import MenuMovil from "./MenuMovil";

const ButtonMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section>
      <button
        className="flex w-7 h-5 p-0.5 rounded-md fixed z-50 top-9 right-4  flex-col justify-between items-center select-none"
        onClick={toggleMenu}
      >
        <div
          className={`h-0.5 rounded-lg bg-slate-50 w-5 transition-all duration-500 transform ${
            menuOpen ? "rotate-45 translate-y-2 scale-125" : ""
          }`}
        />
        <div
          className={`h-0.5 rounded-lg bg-slate-50 w-5 transition-opacity duration-200 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`h-0.5 rounded-lg bg-slate-50 w-5 transition-transform duration-500 transform ${
            menuOpen ? "-rotate-45 -translate-y-[6px] scale-125" : ""
          }`}
        />
      </button>
      {menuOpen && <MenuMovil menuOpen={menuOpen} toggleMenu={toggleMenu} />}
    </section>
  );
};

export default ButtonMenu;
