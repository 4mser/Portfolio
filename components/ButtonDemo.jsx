import { Icon } from "@iconify/react";

function ButtonDemo({ goToSecondSlide }) {
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
      <button
        className="p-px mt-5 absolute z-50 top-3/4 left-1/2 -translate-x-1/2 -translate-y-3/4 overflow-hidden w-fit group rounded-full transition duration-100 shadow-custom2 lg:shadow-custom3 lg:hover:shadow-custom2 xl:-bottom-20"
        style={{
          background: "var(--degree)",
          animation: "gradient 7s ease infinite",
          backgroundSize: "200% 100%",
        }}
        onClick={goToSecondSlide}
      >
        <div className="bg-custom-btn lg:bg-custom-bg text-stone-200 w-full h-full rounded-full text-xl font-light hover:bg-custom-btn transition duration-300 py-7 px-1 flex flex-row whitespace-nowrap items-center gap-2 group-hover:text-white xl:py-2.5 xl:px-9 ">
          <Icon
            icon="solar:arrow-up-linear"
            rotate={2}
            className="scale-110 transition-transform group-hover:translate-y-[3px] animate-bounce"
            style={{
              animation: "bounce 2s infinite",
            }}
          />
        </div>
      </button>
    </>
  );
}

export default ButtonDemo;
