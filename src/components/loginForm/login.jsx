import React from "react";
import Button from "../button/button.jsx";

import "../button/button.css";
import "./login.css";
import InputComponent from "../input/input";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";

function LoginComponent() {
  return (
    <form action="#" className="login-div">
      <div className="title-login">
        <p>Login</p>
      </div>
      <div>
        <div className="inputStyDiv">
          <InputComponent
            type="text"
            inputId="inputOne"
            placeholder="email address"
            icon={<HiOutlineMail />}
            iconStyle="iconSty"
          />
        </div>
        <div className="inputStyDiv">
          <InputComponent
            icon={<HiOutlineLockClosed />}
            type="text"
            inputId="inputTwo"
            placeholder="password"
            iconStyle="iconSty"
          />
        </div>
        <div className="forgotPass">
          <div className="checkboxStyle">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember Me</label>
          </div>
          <div className="recoverPass">
            <p>Forget Password?</p>
          </div>
        </div>
      </div>

      <div>
        <Button btnname="LogIn" className="btn-style" />
      </div>
    </form>
  );
}

export default LoginComponent;
