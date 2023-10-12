import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);

  return (
    <div className="col-sm-2 ">
      <label for="quantity" className="form-label fw-bold">
        QNTY:
      </label>
      <div
        className="border border-dark bg-white rounded my-auto"
        style={{ width: "auto", height: "3em" }}
      >
        <div className="">
          <div className="d-flex justify-content-around ">
            <span className="">
              <button
                type="button"
                className="btn fs-5 fw-bolder"
                onClick={() => setCount(count >= 1 ? count - 1 : 0)}
              >
                {" "}
                -{" "}
              </button>
            </span>

            <h2 className="text-center my-auto">{count}</h2>

            <span>
              <button
                type="button"
                className="btn fs-5 fw-bolder"
                onClick={() => setCount(count + 1)}
              >
                {" "}
                +{" "}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
