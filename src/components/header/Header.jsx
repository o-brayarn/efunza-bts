import React from "react";

const Header = () => {
  return (
    <div className="sticky-top">
      <ul
        className=" nav bg-primary text-white d-flex justify-content-between"
        style={{ fontSize: "0.75rem" }}
      >
        <div className="d-flex">
          <li className="nav-item ">
            <a
              className="nav-link active text-white"
              aria-current="page"
              href="#"
              type="mailto:hello@efunzabts.com"
            >
              Email Us: hello@efunzabts.com
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#" type="tel:+25471234567">
              Call: 071234567
            </a>
          </li>
        </div>
        <li className="nav-item float-end">
          <a className="nav-link" href="login">
            <button
              type="button"
              className="btn btn-outline-light"
              style={{ fontSize: "0.75rem" }}
            >
              Login
            </button>
          </a>
        </li>
      </ul>
      <nav className="navbar navbar-expand-lg  bg-white ">
        <div className="container-fluid">
          <a className="navbar-brand pe-5 fw-bolder" href="#">
            EBTS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
              <li className="nav-item ">
                <a
                  className="nav-link active px-4"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4" href="services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4" href="about">
                  About Us
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link px-4" href="parcel">
                  Parcel
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link px-4" href="contacts">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4" href="#">
                  Book Ticket
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
