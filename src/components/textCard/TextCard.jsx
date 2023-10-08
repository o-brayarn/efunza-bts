import React from "react";
import pic1 from "../../assets/photos/pic1.jpg";

const TextCard = () => {
  return (
    <div className="col p-4">
      <div className="card h-100 p-4">
        <img
          src={pic1}
          alt=""
          className="card-img-top rounded-circle mx-auto d-block"
          style={{ filter: "brightness(50%)", height: "6rem", width: "6rem" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title p-2 text-primary">Ticketing System</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            blanditiis fugit culpa alias et voluptatum exercitationem quos! Cum,
            nesciunt voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
