import React from "react";
import BookingCard from "../../components/bookingCard/BookingCard";
import pic1 from "../../assets/photos/pic1.jpg";
import pic2 from "../../assets/photos/pic2.jpg";
import pic3 from "../../assets/photos/pic3.jpg";
import pic4 from "../../assets/photos/pic4.jpg";

const Home = () => {
  return (
    <main>
      <div className="row ">
        <div className=" row  ">
          {" "}
          <img
            src={pic2}
            alt="..."
            className="img-fluid vh-100 position-relative"
          />
        </div>
        <div className="position-absolute vh-100 text-white d-flex flex-column justify-content-center align-items-center">
          <h1 className="p-1 mt-n1">EFUNZA BUS</h1>
          <h5 className="mb-3">Ticketing System</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="row p-5">
            <BookingCard />
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col p-4">
          <div className="card h-100 p-4">
            <img
              src={pic1}
              alt=""
              className="card-img-top rounded-circle w-50 h-50 mx-auto d-block"
            />
            <div className="card-body text-center">
              <h5 className="card-title p-2">Ticketing System</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                blanditiis fugit culpa alias et voluptatum exercitationem quos!
                Cum, nesciunt voluptatem.
              </p>
            </div>
          </div>
        </div>
        <div className="col p-4">
          <div className="card h-100 p-4">
            <img
              src={pic3}
              alt=""
              className="card-img-top rounded-circle w-50 h-50  mx-auto d-block"
            />
            <div className="card-body text-center">
              <h5 className="card-title p-2">Ticketing System</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, alias sequi inventore fugit itaque distinctio
                dolorum provident eaque dolore nobis?.
              </p>
            </div>
          </div>
        </div>
        <div className="col p-4">
          <div className="card h-100 p-4">
            <img
              src={pic4}
              alt=""
              className="card-img-top rounded-circle w-50 h-50 mx-auto d-block"
            />
            <div className="card-body text-center">
              <h5 className="card-title p-2">Ticketing System</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt, officiis. Amet unde consequatur tempora, perspiciatis
                assumenda corrupti iure obcaecati ratione!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row text-center">
          {" "}
          <h1>Why Choose Us</h1>
        </div>

        <div className="row">
          <div className="col ">
            <div className="z-3 position-absolute p-5 rounded-3">
              <img
                src={pic1}
                alt="Image of Buses"
                className="img-fluid shadow"
                style={{ width: "20rem", height: "20rem" }}
              />
            </div>
            <div className="z-2 position-absolute p-5 rounded-3 ms-5 mt-5">
              <img
                src={pic3}
                alt="Image of Buses"
                className="img-fluid shadow"
                style={{ width: "20rem", height: "20rem" }}
              />
            </div>
            <div className="z-1 position-absolute p-5 rounded-3 ms-6 me-6">
              <img
                src={pic4}
                alt="Image of Buses"
                className="img-fluid shadow"
                style={{ width: "20rem", height: "20rem" }}
              />
            </div>
          </div>

          <div className="col py-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              id earum temporibus obcaecati quae asperiores, dolorem expedita
              laboriosam distinctio optio et quisquam omnis inventore beatae
              tenetur aspernatur magnam pariatur? Veniam nisi ex reprehenderit
              consequuntur? Incidunt vitae aut voluptatem laborum, sed ipsam
              dolores amet eum reprehenderit. Optio fuga numquam magnam cumque.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
