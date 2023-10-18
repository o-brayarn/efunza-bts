import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-fluid overflow-y-hidden background shadow ">
      <div className="row hero-login">
        <div className="col bgimg bg-white d-flex align-items-center">
          <div className="background-image"></div>
          <div className="overlay"></div>
          <div className="content align-self-center text-center">
            <h1 className="fw-bolder d-none d-lg-block ">
              EFUNZA BUS TICKETING SYSTEM
            </h1>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="py-5">
            <div className="login-form text-center">
              <h1 className="fw-bold">Login</h1>
              <small className="fw-medium">Sign in to your EBTS account</small>
            </div>
            <form className="form p-4 mb-5 ">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-3">
                <label for="Password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>

              <div className="form-row d-flex justify-content-between">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label" for="flexCheckChecked">
                    Show Password
                  </label>
                </div>
                <p className="text-dark">Forgot Password?</p>
              </div>

              <input
                type="submit"
                className="btn btn-primary mt-4 content-center fw-1 w-100 my-2 text-capitalize"
                value="LOGIN"
              />

              <br />
              <div className="text-center">
                Don't have an account? &nbsp;
                <Link to="/register" className="text-primary">
                  Register
                </Link>
              </div>

              <div className="text-end">
                <Link to="/" className="text-dark fw-bold">
                  Go back Home
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-2 col-md-2"></div>
      </div>
    </div>
  );
};

export default Login;
