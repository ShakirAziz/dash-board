import React from "react";
import "./input.css";

function InputComponent({
  type,
  inputId,
  placeholder,
  icon,
  iconStyle,
  value,
  handleChange,
  name,
}) {
  return (
    <div className="input-container">
      <input
        type={type}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={name}
      />
      <div className={iconStyle}> {icon}</div>
    </div>
  );
}

export default InputComponent;
