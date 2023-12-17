import React from "react";

const FormButton = () => {
  return (
    <>
      <input
        style={{
          backgroundColor: "#009D92",
          color: "white",
          width: "10rem",
          padding: "0.8rem 0.5rem",
          border: "none",
          borderRadius: "1rem",
          cursor: "pointer",
        }}
        type="submit"
        value="Add New User"
      />
    </>
  );
};

export default FormButton;
