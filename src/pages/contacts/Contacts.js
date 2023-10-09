import React from "react";
import contactbg from "../../assets/contactbg.png";

const Contacts = () => {
  return (
    <section className="background-color mb-5 mt-5">
      <div className="row g-0">
        <img
          src={contactbg}
          className="img-fluid"
          alt="A car in the street"
          style={{
            filter: "brightness(40%)",
            height: "30vh",
          }}
        />

        <div className="position-absolute text-white align-text-left ">
          <h1 className="mt-5 pt-5">Contact Us</h1>
        </div>
      </div>

      <div className="card rounded-4 d-flex float-sm-end shadow me-5">
        <div className="card-body mb-5">
          <h2 className="card-title"> Contact Us</h2>
          <h5 className="card-subtitle mb-2">By Phone</h5>
          <p className="card-text">
            {" "}
            <span className="text-muted">Call us on</span> (+274)701 234 567
          </p>
          <h5 className="card-subtitle mb-2">Email</h5>
          <p className="card-text">
            {" "}
            <span className="text-muted">Send an Email to </span>
            hello@efunzabts.com
          </p>
          <h5 className="card-subtitle mb-2">Instant Messaging</h5>
          <p className="card-text">
            {" "}
            <span className="text-muted">Connect via WhatsApp </span>(+274)701
            234 567
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-around mb-3 px-3">
        <div>
          <div className="text">
            <p className="mb-5 mt-3">
              Need to leave any feedback about our services? Do you want to
              cancel or change your ticket?
            </p>
            <p className="mb-5 mt-3">
              Leave us a message and we'll respond as soon as possible
            </p>
          </div>

          <div className="col bg-white rounded-4 shadow-sm">
            <form className="row g-3 mt-3 px-3">
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Name"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Leave us a message."
                ></textarea>
              </div>
              <div className="col-12 mb-4">
                <button type="submit" className="btn btn-dark">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
