import React from "react";

type TextareaProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
};

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  required,
  rows = 4,
}) => (
  <textarea
    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    rows={rows}
  />
);

export default Textarea;