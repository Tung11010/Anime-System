import React from "react";

interface GoogleButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ onClick, className = "", text = "SIGN IN WITH GOOGLE" }) => (
  <button
    onClick={onClick}
    className={`bg-[#FF5252] text-white font-semibold text-base tracking-widest px-12 py-4 rounded-none shadow-none outline-none block mx-auto flex items-center justify-center gap-4 ${className}`}
    style={{ letterSpacing: "0.2em" }}
  >
    {/* Google Icon SVG - màu trắng */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="white"
      viewBox="0 0 24 24"
      className="inline-block"
    >
      <path d="M21.805 10.023h-9.18v3.955h5.273c-.227 1.18-1.364 3.47-5.273 3.47-3.176 0-5.76-2.63-5.76-5.87s2.584-5.87 5.76-5.87c1.81 0 3.025.77 3.72 1.43l2.54-2.47C17.09 3.37 15.09 2.34 12.625 2.34c-5.02 0-9.09 4.07-9.09 9.09s4.07 9.09 9.09 9.09c5.24 0 8.72-3.68 8.72-8.87 0-.6-.07-1.06-.16-1.56z"/>
    </svg>
    <span>{text}</span>
  </button>
);

export default GoogleButton; 