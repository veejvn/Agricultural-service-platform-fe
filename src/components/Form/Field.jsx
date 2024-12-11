import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "./index";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Field = ({ name, label, type = "text", placeholder, defaultValue}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { data, errors, handleChange } = useContext(FormContext);

  useEffect(() => {
    handleChange(name, defaultValue);
  }, [defaultValue])

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <input
          type={type === "password" && isPasswordVisible ? "text" : type}
          id={name}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border ${errors[name] ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 ${errors[name] ? "focus:ring-red-500" : "focus:ring-primary"
            }`}
          onChange={(e) => {
            if (type === "checkbox") {
              handleChange(name, e.target.checked);
            } else {
              handleChange(name, e.target.value);
            }
          }}
          autoComplete={name}
          {...type === "checkbox" && defaultValue && { checked: true }}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <HiEyeOff className="h-5 w-5 text-gray-600" />
            ) : (
              <HiEye className="h-5 w-5 text-gray-600" />
            )}
          </button>
        )}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
      )}
    </div>
  );
};

export default Field;
