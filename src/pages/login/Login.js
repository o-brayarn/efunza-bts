import React from "react";
import "./login.css";
import LogoImg from "../../assets/logo.png";
import bg from "../../assets/Bus.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {Link} from'react-scroll';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mt-5 overflow-y-hidden ">
      <div className="row hero-login">
        <div className="col-lg-2 col-md-2"></div>
        <div className="col-lg-4 busyangu d-flex align-items-center">
          <div className="bus-image">
            <img src={bg} alt="Bus" className="img-fluid w-100" />
          </div>
        </div>
        <div className="col-lg-4 bg-dark d-flex">
          <div className="py-5">
            <div className="login-form text-center">
              <img
                src={LogoImg}
                alt="logo"
                className="LogoImg img-fluid w-25 mt-2 text-center"
              />
              <h1 className="text-white">Login</h1>
              <small className="text-white">Sign in to your account</small>
            </div>
            <form className="form  p-4 mb-5">
              <div className="input-group">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="user" />{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="input-group my-3">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="lock" />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <span className="input-group-text">
                  <FontAwesomeIcon icon="eye" />{" "}
                </span>
              </div>

              <a href="signin" className="btn btn-primary mt-4 content-center">
                Sign Up{" "}
              </a>
              <p className="text-white float-end">forgot password?</p>
              <br />
              <Link to="/register" className="text-white">
                {" "}
                Register new account{" "}
              </Link>
            </form>
          </div>
        </div>
        <div className="col-lg-2 col-md-2"></div>
      </div>
    </div>
  );
};

export default Login;
