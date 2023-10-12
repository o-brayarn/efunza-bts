import React from "react";

const Amount = () => {
  return (
    <div className="col-sm-2 ">
      <label for="destination" className="form-label fw-bold">
        AMOUNT:
      </label>

      <div
        className="border border-dark bg-white rounded "
        style={{ width: "auto", height: "3em" }}
      >
        <h4 className="text-center my-auto"> 0 </h4>
      </div>
    </div>
  );
};

export default Amount;
