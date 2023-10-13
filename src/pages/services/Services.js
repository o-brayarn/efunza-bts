import React from "react";
import pic7 from "../../assets/photos/pic7.jpg";
import pic4 from "../../assets/photos/pic4.jpg";
import ServiceCard from "../../components/serviceCard/ServiceCard";

const Services = () => {
  return (
    <main>
      <div className="row g-0">
        <div className=" row g-0">
          {" "}
          <img
            src={pic7}
            alt="..."
            className="img-fluid position-relative"
            style={{
              filter: "brightness(30%)",
            }}
          />
        </div>
        <div className="position-absolute text-white d-flex flex-column justify-content-center align-items-center p-5 mt-5 text-center">
          <h1 className="mt-5 pt-5" style={{ fontSize: "5rem" }}>
            Services
          </h1>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="row g-0">
        <h1 className="text-center text-primary pt-5 pb-4">
          Services We Offer
        </h1>
      </div>

      <div className="row g-0 d-flex justify-content-center align-items-center py-4 bg-secondary">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>

      <div className="row py-5 g-0">
        <h1 className="text-center text-primary">Routes</h1>
        <div className="row my-4 d-flex justify-content-center align-items-center">
          <img
            src={pic4}
            alt=""
            className="object-fit"
            style={{ height: "25rem", width: "45rem" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Services;
