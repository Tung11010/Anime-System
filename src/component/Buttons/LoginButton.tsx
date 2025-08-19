import React from "react";

interface LoginButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick, className = "", text = "LOGIN NOW" }) => (
  <button
    onClick={onClick}
    className={`bg-[#e84141] text-white font-semibold text-base tracking-widest px-12 py-4 rounded-none shadow-none outline-none block mx-auto ${className}`}
    style={{ letterSpacing: "0.2em" }}
  >
    {text}
  </button>
);

export default LoginButton;