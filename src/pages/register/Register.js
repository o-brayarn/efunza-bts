import React from "react";
import "./register.css";
import LogoImg from "../../assets/logo.png";
import bg from "../../assets/Bus.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
const register = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-2 col-md-2 "></div>
        <div className="col-lg-4  busyangu d-flex align-items-center">
          <div className="bus-image">
            <img src={bg} alt="Bus" className="bg img-fluid w-100" />
          </div>
        </div>

        <div className="col-lg-4  col-md-4 bg-dark d-flex">
          <div>
            <div className="login-form text-center">
              <img
                src={LogoImg}
                alt="logo"
                className="LogoImg img-fluid w-25 mt-2 text-center"
              />
              <h1 className="text-white">Register</h1>
              <small className="text-white">Register your account</small>
            </div>
            <form className="form  p-4 mb-5">
              <div className="input-group my-3">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="user" />{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>
              <br />
              <div className="input-group">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="inbox" />{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="input-group my-3">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="lock" />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
                <span className="input-group-text">
                  <FontAwesomeIcon icon="eye" />{" "}
                </span>
              </div>
              <div className="input-group my-3">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="lock" />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
                <span className="input-group-text">
                  <FontAwesomeIcon icon="eye" />{" "}
                </span>
              </div>
              <p className="text-white float-end">
                Already have an account? &nbsp;
                <Link to="/" className="text-white">
                  {" "}
                  Login{" "}
                </Link>
              </p>
              <a href="register" className="btn btn-primary mt-3 btn-sm w-100">
                Register
              </a>
            </form>
          </div>
        </div>
        <div className="col-lg-2 col-md-2"></div>
      </div>
    </div>
  );
};

export default register;
