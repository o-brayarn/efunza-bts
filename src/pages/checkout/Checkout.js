import React from "react";
import pic7 from "../../assets/photos/pic7.jpg";
import { Amount, Counter } from "../../components";

const Checkout = () => {
  return (
    <section className="mb-5">
      <div className="row g-0">
        <img
          src={pic7}
          className="img-fluid"
          alt="A car in the street"
          style={{
            filter: "brightness(40%)",
            height: "30vh",
          }}
        />

        <div className="position-absolute text-white align-text-left ">
          <h1 className="fw-bolder display-1 text-center mt-5 pt-5">
            Book A Ticket
          </h1>
        </div>
      </div>

      <form className="row gx-3 gy-2 mt-5 mx-auto d-flex justify-content-center align-items-center">
        <div className="col-sm-3">
          <label for="start-point" className="form-label fw-bold">
            FROM:
          </label>
          <select
            className="form-select form-select-lg border border-dark"
            id="specificSizeSelect"
          >
            <option selected>Nairobi</option>
            <option value="1">Kisumu</option>
            <option value="2">Narok</option>
            <option value="3">Nakuru</option>
            <option value="4">Naivasha</option>
            <option value="5">Mombasa</option>
            <option value="6">Kilifi</option>
          </select>
        </div>

        <div className="col-sm-3">
          <label for="destination" className="form-label fw-bold">
            TO:
          </label>
          <select
            className="form-select form-select-lg border border-dark"
            id="specificSizeSelect"
          >
            <option selected>Kilifi</option>
            <option value="1">Kisumu</option>
            <option value="2">Narok</option>
            <option value="3">Nakuru</option>
            <option value="4">Naivasha</option>
            <option value="5">Mombasa</option>
            <option value="6">Nairobi</option>
          </select>
        </div>
        <Counter />
        <Amount />

        <div className="row-auto text-center mt-5">
          <button type="submit" className="btn btn-dark fs-3 fw-bold">
            Book Ticket(s)
          </button>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
