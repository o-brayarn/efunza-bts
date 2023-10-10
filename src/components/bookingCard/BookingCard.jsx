import React from "react";
import { Form } from "react-bootstrap";

const BookingCard = () => {
  return (
    <div className="container-fluid p-4">
      <div className="card py-2 px-4 w-100">
        <Form.Group action="">
          <div className="row ">
            <div className="col form-floating px-3 mx-2 my-1">
              <select
                name=""
                id=""
                className="form-select form-select-sm"
                style={{ width: "10rem" }}
              >
                <option value="" selected>
                  Nairobi
                </option>
                <option value="">Kisumu</option>
                <option value="">Narok</option>
                <option value="">Nakuru</option>
                <option value="">Naivasha</option>
                <option value="">Mombasa</option>
              </select>
              <label htmlFor="">From</label>
            </div>

            <div className="col form-floating px-3 mx-2 my-1 ">
              <select
                name=""
                id=""
                className="form-select form-select-sm"
                style={{ width: "10rem" }}
              >
                <option value="">Nairobi</option>
                <option value="">Kisumu</option>
                <option value="">Narok</option>
                <option value="">Nakuru</option>
                <option value="">Naivasha</option>
                <option value="" selected>
                  Mombasa
                </option>
              </select>
              <label htmlFor="">To</label>
            </div>

            <div className="col form-floating px-3 mx-2 my-1">
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
                style={{ width: "10rem" }}
              />
              <Form.Label>Select Date</Form.Label>
            </div>

            <div className="col px-4 mx-2 my-2 d-flex align-items-center">
              <button
                type="submit"
                className="btn btn-primary btn-small px-5 rounded-pill "
                style={{ fontSize: "0.75rem" }}
              >
                Book
              </button>
            </div>
          </div>
        </Form.Group>
      </div>
    </div>
  );
};

export default BookingCard;
