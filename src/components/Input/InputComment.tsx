import React from "react";

interface InputCommentProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string; // 
}

const InputComment: React.FC<InputCommentProps> = ({
  value,
  onChange,
  placeholder = "Your Comment",
  className = "", 
}) => (
  <textarea
    className={`w-[500px] min-h-[90px] p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 bg-white resize-none ${className}`} // 👈 kết hợp className
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default InputComment;
