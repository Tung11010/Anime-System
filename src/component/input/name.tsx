import React from "react";

const NameInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <div className="flex items-center bg-white rounded h-[60px] px-4 w-full max-w-[480px]">
    <span className="flex items-center text-gray-400 mr-4">
      {/* SVG icon user */}
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" fill="#b0b0b0" />
        <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" fill="#b0b0b0" />
      </svg>
    </span>
    <div className="w-px h-8 bg-gray-200 mr-4" />
    <input
      type="text"
      placeholder="Your Name"
      className="border-none outline-none text-lg text-gray-400 flex-1 bg-transparent placeholder-gray-400"
      {...props}
    />
  </div>
);

export default NameInput; 