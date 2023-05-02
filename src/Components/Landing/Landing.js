import React from "react";
import "./Landing.css";
import LandingImage from "../../Assets/Images/yas1-removebg-preview.png";

const Home = () => {
  return (
    <>
      <section className="Landing" id="LandingSection">
        <div className="containerLanding">
          <div className="block-2">
            <figure className="figLanding">
              <img
                className="imgLanding"
                alt="img_Landing"
                src={LandingImage}
              ></img>
            </figure>
          </div>
          <div className="block-1">
            <label className="lblLanding-Jumbo">
              Do you have a concept and need to design them quickly?
            </label>
            <p className="lblLanding-para">
              We are flexible team working on latest technologies. We specialise
              in UI/UX services, Web & App development & Cloud hosting.
            </p>
            <button className="btnLanding">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
