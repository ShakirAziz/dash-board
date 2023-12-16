import React from "react";
import Button from "../button/button.jsx";
import "../button/button.css";
import "./login.css";
import InputComponent from "../input/input";
import linkedin from "../../assets/loginImgs/linkedin.png";
import facebook from "../../assets/loginImgs/facebook.png";
import google from "../../assets/loginImgs/google.png";

function LoginComponent() {
  return (
    <form action="#" className="login-div">
      <div className="title-login">
        <p>Login</p>
      </div>
      <p>or</p>
      <div className="logo-imgs">
        <div className="logoAll">
          <a href="https://www.linkedin.com">
            <img src={linkedin} alt="" />
          </a>
        </div>
        <div className="logoAll">
          {" "}
          <a href="https://www.facebook.com">
            <img src={facebook} alt="" />
          </a>
        </div>
        <div className="logoAll">
          <a href="https://www.google.com">
            <img src={google} alt="" />
          </a>
        </div>
      </div>
      <div>
        <InputComponent
          type="text"
          inputId="inputOne"
          placeholder="email address"
        />
        <InputComponent type="text" inputId="inputTwo" placeholder="password" />
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

      <div className="accountLinks">
        <p className="newAccount">Don't have an account?</p>

        <p className="signup">Signup!</p>
      </div>
    </form>
  );
}

export default LoginComponent;
