import React from "react";
import pic7 from "../../assets/photos/pic7.jpg";

const ServiceCard = () => {
  return (
    <div
      className="row bg-white py-2 px-2 mb-2 d-flex justify-content-center align-items-center rounded"
      style={{ width: "60%" }}
    >
      <div className="col d-flex justify-content-center align-items-center">
        <img
          src={pic7}
          alt=""
          className="rounded-circle"
          style={{ height: "4rem", width: "4rem" }}
        />
      </div>
      <div className="col d-flex flex-column justify-content-center align-items-start">
        <h6 className="text-primary">Lorem, ipsum.</h6>
        <p style={{ fontSize: "0.7rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <button
          className="btn btn-primary rounded-pill"
          style={{ fontSize: "0.7rem" }}
        >
          Make a Booking
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
