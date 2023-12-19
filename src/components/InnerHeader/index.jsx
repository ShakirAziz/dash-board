import React from "react";

function InnerHeader(props) {
  return (
    <>
      <ul className="delList">
        <li>{props.picture}</li>
        <li>{props.name}</li>
        <li>{props.email}</li>
        <li>{props.action}</li>
      </ul>
    </>
  );
}

export default InnerHeader;
