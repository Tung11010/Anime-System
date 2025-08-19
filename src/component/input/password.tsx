import React from "react";

const PasswordInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <div className="flex items-center bg-white rounded px-4 h-[60px]">
    <span className="flex items-center text-gray-400 mr-4">
      {/* SVG icon lock */}
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect x="5" y="11" width="14" height="8" rx="2" fill="#b0b0b0"/>
        <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </span>
    <div className="w-px h-8 bg-gray-200 mr-4" />
    <input
      type="password"
      placeholder="Password"
      className="border-none outline-none text-lg text-gray-700 flex-1 bg-transparent placeholder-gray-400"
      {...props}
    />
  </div>
);

export default PasswordInput;