import React, { useState } from "react";
import "../button/button.css";
import "./login.css";
import InputComponent from "../input/input";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const user = { eamil: "shakir", password: "1234" };
  const navigate = useNavigate();
  const handleChange = e => {
    const InputValue = e.target.value;
    const name = e.target.name;
    setData(preValue => {
      return {
        ...preValue,
        [name]: InputValue,
      };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (data.email === user.eamil && data.password === user.password) {
      navigate("/dashboard");
    } else {
      alert("Please check email and password");
    }
  };
  return (
    <form action="#" className="login-div" onSubmit={handleSubmit}>
      <div className="title-login">
        <p>Login</p>
      </div>
      <div>
        <div className="inputStyDiv">
          <InputComponent
            type="text"
            inputId="inputOne"
            placeholder="email address"
            name="email"
            handleChange={handleChange}
            icon={<HiOutlineMail />}
            iconStyle="iconSty"
            value={data.email}
          />
        </div>
        <div className="inputStyDiv">
          <InputComponent
            icon={<HiOutlineLockClosed />}
            type="password"
            value={data.password}
            name="password"
            inputId="inputTwo"
            placeholder="password"
            iconStyle="iconSty"
            handleChange={handleChange}
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
        <input
          type="submit"
          value="LogIn"
          className="btn-style"
          style={{ cursor: "pointer" }}
        />
        {/* <Button btnname="LogIn" className="btn-style" /> */}
      </div>
    </form>
  );
}

export default LoginComponent;
