import React from "react";
import pic7 from "../../assets/photos/pic7.jpg";

const Services = () => {
  return (
    <main>
      <div className="row ">
        <div className=" row ">
          {" "}
          <img
            src={pic7}
            alt="..."
            className="img-fluid vh-100 position-reltive"
          />
        </div>
        <div className="position-absolute text-white d-flex flex-column justify-content-center align-items-center">
          <h1>Services</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="row">
        <h1>Services We Offer</h1>
      </div>

      <div className="row bg-gray  ">
        <div className="row" style={{ width: "18rem" }}>
          <div class="card d-flex">
            <img src={pic7} alt="" className="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img src={pic7} alt="" className="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="card" style={{ width: "18rem" }}>
            <img src={pic7} alt="" className="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h1>Routes</h1>
        <div className="row">API</div>
      </div>
    </main>
  );
};

export default Services;
