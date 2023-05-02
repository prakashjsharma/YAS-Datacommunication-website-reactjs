import React from "react";
import "./Services.css";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUnlink } from "@fortawesome/free-solid-svg-icons";
//import { MdWeb } from 'react-icons/fa';
//import { CgWebsite } from "@react-icons/all-files/fa/FaBeer";

const Services = () => {
  return (
    <>
      <section className="ServicesSection">
        <div className="containerService">
          <div className="Services-header">
            <label className="lblServiceHeader">Services We Offer</label>
          </div>
          <div className="Services-header-para">
            <label className="lblServiceHeaderPara">
              Our strength lies in the comprehensive suite of services we offer
              to our clients.
            </label>
          </div>
          <div className="Services-body">
            <div className="serviceClone">
              <div className="serviceBox">
                <div className="serviceIconBox">
                  <i className="fa-brands fa-uikit iconFrontend"></i>
                </div>
                <div className="serviceHeaderBox">
                  <label className="lblServiceHeader">UI / UX Services</label>
                </div>
                <div className="serviceBodyBox">
                  <p className="lblServiceBody">
                    We provide best UI / Ux design at lower cost. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Enim, dolorem.{" "}
                  </p>
                </div>
              </div>
              <div className="serviceBox">
                <div className="serviceIconBox">
                  <i className="fa-solid fa-laptop-code iconFrontend"></i>
                </div>
                <div className="serviceHeaderBox">
                  <label className="lblServiceHeader">
                    Software Development
                  </label>
                </div>
                <div className="serviceBodyBox">
                  <p className="lblServiceBody">
                    We provide full backend service at lower cost. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Enim, dolorem.{" "}
                  </p>
                </div>
              </div>
              <div className="serviceBox">
                <div className="serviceIconBox">
                  <i className="fa-solid fa-code iconFrontend"></i>
                </div>
                <div className="serviceHeaderBox">
                  <label className="lblServiceHeader">Web Development</label>
                </div>
                <div className="serviceBodyBox">
                  <p className="lblServiceBody">
                    We provide full Stack Development service's at lower cost.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim, dolorem.{" "}
                  </p>
                </div>
              </div>
              <div className="serviceBox">
                <div className="serviceIconBox">
                  <i className="fa-solid fa-cloud-arrow-up iconFrontend"></i>
                </div>
                <div className="serviceHeaderBox">
                  <label className="lblServiceHeader">Cloud Computing</label>
                </div>
                <div className="serviceBodyBox">
                  <p className="lblServiceBody">
                    We provide full Stack React Development service's at lower
                    cost. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Enim, dolorem.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* <i className="fa-brands fa-uikit"></i> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
