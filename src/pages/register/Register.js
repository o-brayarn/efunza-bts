import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <section className="container-fluid overflow-y-hidden background">
      <div className="row">
        <div className="col bgimg bg-white d-flex align-items-center">
          <div className="background-image"></div>
          <div className="overlay"></div>
          <div className="content align-self-center text-center">
            <h1 className="fw-bolder">EFUNZA BUS TICKETING SYSTEM</h1>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="py-5">
            <div className="login-form text-center">
              <h1 className="fw-bold">Register</h1>
              <small className="fw-medium">Register to EBTS</small>
            </div>
            <form className="form p-4 mb-5">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter email address"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <label for="confirmpass" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmpass"
                  placeholder="Confirm password"
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
                value="REGISTER"
              />
              <div className="text-center">
                Already have an account? &nbsp;
                <Link to="/login" className="text-primary">
                  {" "}
                  Login{" "}
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
      </div>
    </section>
  );
};

export default Register;
