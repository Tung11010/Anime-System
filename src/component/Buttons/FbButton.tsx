import React from "react";

interface FacebookButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
}

const FacebookButton: React.FC<FacebookButtonProps> = ({ onClick, className = "", text = "SIGN IN WITH FACEBOOK" }) => (
  <button
    onClick={onClick}
    className={`bg-[#4c6eb1] text-white font-semibold text-base tracking-widest px-12 py-4 rounded-none shadow-none outline-none block mx-auto flex items-center justify-center gap-4 ${className}`}
    style={{ letterSpacing: "0.2em" }}
  >
    {/* Facebook SVG icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="white"
      viewBox="0 0 24 24"
      className="inline-block"
    >
      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
    </svg>
    <span>{text}</span>
  </button>
);

export default FacebookButton;