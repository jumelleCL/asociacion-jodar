"use client"; // necesario en Next 13+ si estás en app dir

import React, { useState, ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  text?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  className?: string;
};

const Input = ({ text = "text", name, id, placeholder, className, ...rest }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = text === "password";

  return (
    <div className="relative w-full">
      <input
        type={isPassword && showPassword ? "text" : text}
        name={name}
        id={id}
        className={`text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100 ${
          className || ""
        }`}
        placeholder={placeholder || "Input"}
        {...rest}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      )}
    </div>
  );
};

export default Input;
