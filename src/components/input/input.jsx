import React from "react";
import "./input.css";

function InputComponent({ type, inputId, placeholder, icon, iconStyle }) {
  return (
    <div className="input-container">
      <input type={type} id={inputId} placeholder={placeholder} />
      <div className={iconStyle}> {icon}</div>
    </div>
  );
}

export default InputComponent;
