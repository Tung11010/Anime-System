import React from "react";

type InputFormProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const InputForm: React.FC<InputFormProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required,
}) => (
  <input
    type={type}
    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  />
);

export default InputForm;