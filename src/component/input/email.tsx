import React from "react";

const EmailInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <div className="flex items-center bg-white rounded h-[60px] px-4 w-full max-w-[480px]">
    <span className="flex items-center text-gray-400 mr-4">
      {/* SVG icon email */}
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm1.5-.5v.217l8.5 5.666 8.5-5.666V6a1 1 0 0 0-1-1h-15a1 1 0 0 0-1 1Zm17 1.383-7.5 5-7.5-5V17.5a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V7.383Z" fill="#b0b0b0"/>
      </svg>
    </span>
    <div className="w-px h-8 bg-gray-200 mr-4" />
    <input
      type="email"
      placeholder="Email address"
      className="border-none outline-none text-lg text-gray-400 flex-1 bg-transparent placeholder-gray-400"
      {...props}
    />
  </div>
);

export default EmailInput;