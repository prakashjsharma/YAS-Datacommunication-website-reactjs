import React from "react";
import "./Technology.css";
import dotNetImg from "../../Assets/SVGImages/net.png";
import bootstrapImg from "../../Assets/SVGImages/bootstrap.png";
import reactImg from "../../Assets/SVGImages/React.png";
import JavascriptImg from "../../Assets/SVGImages/javascript.png";
import SQLImg from "../../Assets/SVGImages/SQL.png";
import HTMLImg from "../../Assets/SVGImages/HTML.png";
import CssImg from "../../Assets/SVGImages/Css.png";
import NodeImg from "../../Assets/SVGImages/node.png";

const Technology = () => {
  return (
    <>
      <section className="TechnologySection">
        <div className="containerTechnology">
          <div className="technologyHeader">
            <label className="lblTechnologyHeader">
              Technologies we work on
            </label>
          </div>
          <div className="Technology-header-para">
            <label className="lblTechnologyHeaderPara">
              Check out what programming languages, database systems, and
              platforms we use to complete projects for our clients.
            </label>
          </div>

          <div className="technology-body">
            <div className="technologyClone">
              <div className="technologyBox">
                <div className="technologyIconBox">
                  <img className="technologysvg" src={dotNetImg} />
                </div>
                <div className="technologyHeaderBox">
                  <label className="lbltechnologyHeader">.Net Framework</label>
                </div>
                <div className="technologyBodyBox">
                  <p className="lbltechnologyBody">
                    We provide best UI / Ux design at lower cost. Lorem ipsum
                    dolor sit amet .
                  </p>
                </div>
              </div>
              <div className="technologyBox">
                <div className="technologyIconBox">
                  <img className="technologysvg" src={bootstrapImg} />
                </div>
                <div className="technologyHeaderBox">
                  <label className="lbltechnologyHeader">Bootstrap</label>
                </div>
                <div className="technologyBodyBox">
                  <p className="lbltechnologyBody">
                    We provide best UI / Ux design at lower cost. Lorem ipsum
                    dolor sit amet .
                  </p>
                </div>
              </div>

              <div className="technologyBox">
                <div className="technologyIconBox">
                  <img className="technologysvg" src={reactImg} />
                </div>
                <div className="technologyHeaderBox">
                  <label className="lbltechnologyHeader">React</label>
                </div>
                <div className="technologyBodyBox">
                  <p className="lbltechnologyBody">
                    We provide best UI / Ux design at lower cost. Lorem ipsum
                    dolor sit amet .
                  </p>
                </div>
              </div>

              <div className="technologyBox">
                <div className="technologyIconBox">
                  <img className="technologysvg" src={JavascriptImg} />
                </div>
                <div className="technologyHeaderBox">
                  <label className="lbltechnologyHeader">Javascript</label>
                </div>
                <div className="technologyBodyBox">
                  <p className="lbltechnologyBody">
                    We provide best UI / Ux design at lower cost. Lorem ipsum
                    dolor sit amet .
                  </p>
                </div>
              </div>

              <div className="technologyBox">
                <div className="technologyIconBox">
                  <img className="technologysvg" src={SQLImg} />
                </div>
                <div className="technologyHeaderBox">
                  <label className="lbltechnologyHeader">SQL</label>
                </div>
                <div className="technologyBodyBox">
                  <p className="lbltechnologyBody">
                    We provide best UI / Ux design at lower cost. Lorem ipsum
                    dolor sit .
                  </p>
                </div>
              </div>

              <div className="technologyBox">
                <div className="technologyIconBox">
                  <img className="technologysvg" src={HTMLImg} />
                </div>
                <div className="technologyHeaderBox">
                  <label className="lbltechnologyHeader">HTML</label>
                </div>
                <div className="technologyBodyBox">
                  <p className="lbltechnologyBody">
                    We provide best UI / Ux design at lower cost. Lorem ipsum
                    dolor sit amet .
                  </p>
                </div>
              </div>

              <div className="technologyBox">
                <div className="technologyIconBox">
                  <img className="technologysvg" src={CssImg} />
                </div>
                <div className="technologyHeaderBox">
                  <label className="lbltechnologyHeader">CSS</label>
                </div>
                <div className="technologyBodyBox">
                  <p className="lbltechnologyBody">
                    We provide best UI / Ux design at lower cost. Lorem ipsum
                    dolor sit amet .
                  </p>
                </div>
              </div>

              <div className="technologyBox">
                <div className="technologyIconBox">
                  <img className="technologysvg" src={NodeImg} />
                </div>
                <div className="technologyHeaderBox">
                  <label className="lbltechnologyHeader">Node JS</label>
                </div>
                <div className="technologyBodyBox">
                  <p className="lbltechnologyBody">
                    We provide best UI / Ux design at lower cost. Lorem ipsum
                    dolor sit amet .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
