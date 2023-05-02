import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../Assets/Images/yas1-removebg-preview.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = (event) => {
    // 👇️ toggle isActive state variable
    setIsActive((current) => !current);
  };
  return (
    <>
      <div className="header">
        <div className="containerheader">
          <img alt="YAS" className="imglogoyas" src={Logo}></img>
          <a
            id="menu-icon"
            className={isActive ? "expand" : ""}
            onClick={toggleClass}
          >
            &#9776;
          </a>
          <nav className="navbar">
            <ul className="menu">
              <li>
                <a className="active" href="#LandingSection">
                  Home
                </a>
              </li>
              <li>
                <a href="#AboutSection">About</a>
              </li>
              <li>
                <a href="#GallerySection">Gallery</a>
              </li>
              <li>
                <a href="#CarrersSection">Careers</a>
              </li>
              <li>
                <a className="lblGetInTouch" href="#ContactSection">
                  GET IN TOUCH
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
