import React from "react";
import "./input.css";

function InputComponent({ type, inputId, placeholder, icons }) {
  return (
    <div>
      <input type={type} id={inputId} placeholder={placeholder} />
      {icons}
    </div>
  );
}

export default InputComponent;
