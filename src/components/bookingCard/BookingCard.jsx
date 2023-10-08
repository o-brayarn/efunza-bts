import React from "react";
import { Form } from "react-bootstrap";

const BookingCard = () => {
  return (
    <div class="container-fluid p-4">
      <div className="card py-2 px-4 w-100">
        <Form.Group action="">
          <div className="row">
            <div className="col form-floating px-3 mx-2">
              <select name="" id="" className="form-select form-select-sm">
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

            <div className="col form-floating px-3 mx-2">
              <select name="" id="" className="form-select form-select-sm">
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

            <div className="col form-floating px-3 mx-2">
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
              />
              <Form.Label>Select Date</Form.Label>
            </div>

            <div className="col px-4 mx-2">
              <button type="submit" class="btn btn-primary btn-small px-5 rounded-pill ">
                Make a booking
              </button>
            </div>
          </div>
        </Form.Group>
      </div>
    </div>
  );
};

export default BookingCard;
