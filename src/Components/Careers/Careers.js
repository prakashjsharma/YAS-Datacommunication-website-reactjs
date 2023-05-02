import React from "react";
import "./Careers.css";

const Careers = () => {
  return (
    <>
      <section className="CareersSection" id="CarrersSection">
        <div className="containerCareers">
          <div className="TestimonialSectionHolder">
            <div className="CareersHeaderDiv">
              <label className="lblCareerHeader">
                We always look forward for New & Creative minds.
              </label>
            </div>
            <div className="CareersBoxDiv">
              <div className="CareersCloneBox">
                <div className="CareersBoxes">
                  <div className="descriptionSection">
                    <label className="lblCareerTechnology">ASP.NET</label>
                    <div className="divOrangeHrHolder">
                      <hr className="hrOrange" />
                    </div>
                    <br />
                    <p className="lblCareerTechnologyDes">
                      we have Opening for the .net language. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="CareersBtnSection">
                    <button type="submit" className="btnCareersApply">
                      Apply Now
                    </button>
                  </div>
                </div>

                <div className="CareersBoxes">
                  <div className="descriptionSection">
                    <label className="lblCareerTechnology">Front-End</label>
                    <div className="divOrangeHrHolder">
                      <hr className="hrOrange" />
                    </div>
                    <br />
                    <p className="lblCareerTechnologyDes">
                      we have Opening for the .net language.
                      HTML,Css,JavaScript, Jquery, Lorem ipsum dolor sit amet
                      consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="CareersBtnSection">
                    <button type="submit" className="btnCareersApply">
                      Apply Now
                    </button>
                  </div>
                </div>

                <div className="CareersBoxes">
                  <div className="descriptionSection">
                    <label className="lblCareerTechnology">Backend</label>
                    <div className="divOrangeHrHolder">
                      <hr className="hrOrange" />
                    </div>
                    <br />
                    <p className="lblCareerTechnologyDes">
                      we have Opening for the .net language. SQLServer, MongoDB
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="CareersBtnSection">
                    <button type="submit" className="btnCareersApply">
                      Apply Now
                    </button>
                  </div>
                </div>

                <div className="CareersBoxes">
                  <div className="descriptionSection">
                    <label className="lblCareerTechnology">React</label>
                    <div className="divOrangeHrHolder">
                      <hr className="hrOrange" />
                    </div>
                    <br />
                    <p className="lblCareerTechnologyDes">
                      we have Opening for the .net language. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="CareersBtnSection">
                    <button type="submit" className="btnCareersApply">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
