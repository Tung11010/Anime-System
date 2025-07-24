import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const SlideHomePage = () => {
  const [animateKey, setAnimateKey] = useState(0);

  const handlePrev = () => {
    setAnimateKey(prev => prev + 1); // đổi key để re-trigger animation
  };

  const handleNext = () => {
    setAnimateKey(prev => prev + 1);
  };

  return (
    <div className="relative bg-[url('https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9361459_v_v8_ab.jpg')] bg-cover bg-center h-[420px] w-full max-w-[830px] rounded-[12px] mb-[40px] mt-[32px] flex justify-start">
      {/* Nút trái */}
      <button
        onClick={handlePrev}
        className="absolute top-[42%] -left-[25px] w-[50px] h-[50px] bg-[#2e2343] border-t-[6px] border-r-[6px] border-solid border-[rgb(3,3,43)] rotate-45 cursor-pointer z-10"
      >
        <ChevronLeft className="rotate-[-45deg] text-white text-[18px] relative -top-[2%] left-[16%]" />
      </button>

      {/* Nút phải */}
      <button
        onClick={handleNext}
        className="absolute top-[42%] -right-[25px] w-[50px] h-[50px] bg-[#2e2343] border-l-[6px] border-b-[6px] border-solid border-[rgb(3,3,43)] rotate-45 cursor-pointer z-10"
      >
        <ChevronRight className="rotate-[-45deg] text-white text-[18px] relative -top-[2%] left-[16%]" />
      </button>

      {/* Nội dung text - dùng key để re-render lại animation */}
      <div
        key={animateKey}
        className="absolute top-[30%] left-[6%] opacity-100 animate-slideUpFade"
      >
        <p className="text-red-600 bg-white w-[88px] text-[15px] text-center">Aventure</p>
        <h1 className="text-white text-[38px] my-[14px] leading-tight">
          Fate/stay night unlimited <br /> Blade works
        </h1>
        <p className="text-white font-light text-[14px] my-[14px]">
          After 30 days of travel across the world
        </p>
        <a href="#" className="bg-red-600 text-white py-2 px-6 rounded">
          Watch Now
        </a>
      </div>

      {/* Dots */}
      <div className="absolute top-[93%] left-1/2 transform -translate-x-1/2 flex gap-[10px]">
        <span className="w-[8px] h-[8px] rounded-[15px] bg-white opacity-100 cursor-pointer"></span>
        <span className="w-[8px] h-[8px] rounded-[15px] bg-white opacity-50 cursor-pointer"></span>
        <span className="w-[8px] h-[8px] rounded-[15px] bg-white opacity-50 cursor-pointer"></span>
      </div>
    </div>
  );
};

export default SlideHomePage;