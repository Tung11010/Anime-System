import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const SlideHomePage = () => {
  const [animateKey, setAnimateKey] = useState(0);

  const handlePrev = () => setAnimateKey(prev => prev + 1);
  const handleNext = () => setAnimateKey(prev => prev + 1);

  return (
    <div className="relative bg-[url('https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9361459_v_v8_ab.jpg')] bg-cover bg-center h-[400px] md:h-[420px] w-[85%] max-w-[868px] rounded-[12px] mb-10 mt-8 px-4 sm:px-6 md:px-0 mx-auto flex justify-start items-center">
      {/* Nút trái */}
      <button
        onClick={handlePrev}
        className="absolute -left-5 md:-left-[1.57rem] top-1/2 -translate-y-1/2 w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#2e2343] border-t-[5px] border-r-[5px] md:border-t-[6px] md:border-r-[6px] border-solid border-[rgb(3,3,43)] rotate-45 cursor-pointer z-10"
      >
        <ChevronLeft className="rotate-[-45deg] text-white text-[16px] md:text-[18px] relative -top-[2%] left-[16%]" />
      </button>

      {/* Nút phải */}
      <button
        onClick={handleNext}
        className="absolute -right-5 md:-right-[1.57rem] top-1/2 -translate-y-1/2 w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#2e2343] border-l-[5px] border-b-[5px] md:border-l-[6px] md:border-b-[6px] border-solid border-[rgb(3,3,43)] rotate-45 cursor-pointer z-10"
      >
        <ChevronRight className="rotate-[-45deg] text-white text-[16px] md:text-[18px] relative -top-[2%] left-[16%]" />
      </button>

      {/* Nội dung */}
      <div
        key={animateKey}
        className="absolute top-[40%] left-[6%] animate-slideUpFade"
      >
        <p className="text-red-600 bg-white w-[88px] text-[13px] md:text-[15px] text-center">
          Adventure
        </p>
        <h1 className="font-oswald font-bold text-white text-[26px] md:text-[38px] my-[14px] leading-tight">
          Fate / stay night unlimited <br /> Blade works
        </h1>
        <p className="text-white font-light text-[13px] md:text-[14px] my-[14px] max-w-[280px] md:max-w-none">
          After 30 days of travel across the world
        </p>
        <a
          href="#"
          className="bg-red-600 text-white py-2 px-5 md:px-6 text-[13px] md:text-[15px] rounded inline-block"
        >
          Watch Now
        </a>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 md:top-[93%] left-1/2 transform -translate-x-1/2 flex gap-[10px]">
        <span className="w-[8px] h-[8px] rounded-full bg-white opacity-100 cursor-pointer" />
        <span className="w-[8px] h-[8px] rounded-full bg-white opacity-50 cursor-pointer" />
        <span className="w-[8px] h-[8px] rounded-full bg-white opacity-50 cursor-pointer" />
      </div>
    </div>
  );
};

export default SlideHomePage;
