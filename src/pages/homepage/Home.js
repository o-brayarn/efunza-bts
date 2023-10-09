import React from "react";
import BookingCard from "../../components/bookingCard/BookingCard";
import pic1 from "../../assets/photos/pic1.jpg";
import pic2 from "../../assets/photos/pic2.jpg";
import pic3 from "../../assets/photos/pic3.jpg";
import pic4 from "../../assets/photos/pic4.jpg";
import pic6 from "../../assets/photos/pic6.jpg";
import TextCard from "../../components/textCard/TextCard";

const Home = () => {
  return (
    <main>
      <div className="row g-0">
        <div className=" row  g-0">
          {" "}
          <img
            src={pic2}
            alt="..."
            className="img-fluid vh-100 position-relative"
            style={{
              filter: "brightness(30%)",
            }}
          />
        </div>
        <div className="position-absolute vh-100 text-white d-flex flex-column justify-content-center align-items-center p-5 mt-5">
          <h1 className="mt-5 pt-5" style={{ fontSize: "4rem" }}>
            EFUNZA BUS
          </h1>
          <h5 className="mb-3" style={{ fontSize: "1.2rem" }}>
            Ticketing System
          </h5>
          <p className="py-2" style={{ fontSize: "0.75rem" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="row g-0 p-3">
            <BookingCard />
          </div>
        </div>
      </div>

      <div className="row g-0 row-cols-1 row-cols-md-3 mt-5 py-3">
        <TextCard />
        <TextCard />
        <TextCard />
      </div>
      <div className="row g-0">
        <div className="row g-0 text-center mt-5">
          {" "}
          <h1 className="text-primary">Why Choose Us</h1>
        </div>

        <div className="row g-0 mb-5 py-5 px-4 ">
          <div className="col position-relative  d-flex justify-content-center align-items-center">
            <div className="z-3 position-absolute p-5 rounded-3 ms-4 mt-4 shadow-lg">
              <img
                src={pic1}
                alt="Image of Buses"
                className="img-fluid shadow-lg"
                style={{ width: "15rem", height: "15rem" }}
              />
            </div>
            <div className="z-2 position-absolute p-5 rounded-3 ms-5 mt-5 shadow-lg">
              <img
                src={pic3}
                alt="Image of Buses"
                className="img-fluid shadow"
                style={{ width: "15rem", height: "15rem" }}
              />
            </div>
            <div className="z-1 position-absolute p-5 rounded-3 ms-6 me-6 shadow-lg">
              <img
                src={pic6}
                alt="Image of Buses"
                className="img-fluid shadow"
                style={{ width: "15rem", height: "15rem" }}
              />
            </div>
          </div>

          <div className="col py-4 px-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              id earum temporibus obcaecati quae asperiores, dolorem expedita
              laboriosam distinctio optio et quisquam omnis inventore beatae
              tenetur aspernatur magnam pariatur? Veniam nisi ex reprehenderit
              consequuntur? Incidunt vitae aut voluptatem laborum, sed ipsam
              dolores amet eum reprehenderit. Optio fuga numquam magnam cumque.
            </p>
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
