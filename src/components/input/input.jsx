import React from "react";
import "./input.css";

function InputComponent({ type, inputId, placeholder }) {
  return (
    <div>
      <input type={type} id={inputId} placeholder={placeholder} />
    </div>
  );
}

export default InputComponent;
