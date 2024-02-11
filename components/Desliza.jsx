"use client";
import React, { useEffect, useState } from "react";

function Desliza() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div
      isVisible={isVisible}
      className={`fixed bottom-0 z-50 flex justify-between items-center flex-row w-4 h-[9rem] font-medium left-4 lg:left-12 xl:left-[11%] vertical-lr text-[8px] text-white gap-2 tracking-[5px] md:h-60 md:right-24 md:text-sm md:w-8 md:tracking-[7px] transition ease-in-out  duration-300  ${
        isVisible ? "" : "translate-y-64"
      }`}
    >
      DESLIZA
      <div className="h-44 w-px opacity-60 text-xs bg-white md:w-[2px]"></div>
    </div>
  );
}

export default Desliza;
