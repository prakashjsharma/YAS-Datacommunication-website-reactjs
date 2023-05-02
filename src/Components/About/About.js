import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="AboutSection" id="AboutSection">
        <div className="AboutContainer">
          <div className="AboutHeaderContainer">
            <label className="lblHeaderAbout">
              From 2020 we <br /> serve our best services
            </label>
          </div>

          <div className="AboutBodySection">
            <div className="AboutCloneBox">
              <div className="AboutBox">
                <div className="AboutHeaderBox">
                  <label className="lblAboutHeader">Our Journey</label>
                </div>
                <div className="AboutBodyBox">
                  <p className="lblAboutBody">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quo sint impedit adipisci.
                  </p>
                </div>
              </div>

              <div className="AboutBox">
                <div className="AboutHeaderBox">
                  <label className="lblAboutHeader">2020</label>
                </div>
                <div className="AboutBodyBox">
                  <p className="lblAboutBody">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quo sint impedit adipisci.
                  </p>
                </div>
              </div>
              <div className="AboutBox">
                <div className="AboutHeaderBox">
                  <label className="lblAboutHeader">2021</label>
                </div>
                <div className="AboutBodyBox">
                  <p className="lblAboutBody">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quo sint impedit adipisci.
                  </p>
                </div>
              </div>

              <div className="AboutBox">
                <div className="AboutHeaderBox">
                  <label className="lblAboutHeader">2022</label>
                </div>
                <div className="AboutBodyBox">
                  <p className="lblAboutBody">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quo sint impedit adipisci.
                  </p>
                </div>
              </div>
            </div>

            <div className="AboutParagraphSection">
              <p className="lblAboutPara">
                Our Journey begin with the best, Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nostrum provident ducimus sed non
                quod recusandae veniam beatae maiores nemo! Veniam, molestias
                quidem! Magni.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
