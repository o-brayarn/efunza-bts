import React, { useState } from "react";

const Amount = () => {
  const [amount, setAmount] = useState(0);

  return (
    <div className="col-sm-2 ">
      <label for="destination" className="form-label fw-bold">
        AMOUNT:
      </label>

      <div
        className="border border-dark bg-white rounded "
        style={{ width: "auto", height: "3em" }}
      >
        <h4 className="text-center my-auto">{amount}</h4>
      </div>
    </div>
  );
};

export default Amount;
