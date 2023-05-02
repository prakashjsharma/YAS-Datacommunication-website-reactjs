import React from "react";
import "./Clients.css";
import Client1 from "../../Assets/Images/logo-01.png";
import Client2 from "../../Assets/Images/TMS-logo-tsp.png";
import Client3 from "../../Assets/Images/LULUMainlogo11.png";
import Client4 from "../../Assets/Images/cat_logo2.png";

const Clients = () => {
  return (
    <>
      <section className="ClientsSection">
        <div className="ClientsContainer">
          <div className="ClientsHeader">
            <label className="lblClientsHeader">Our Clients</label>
          </div>
          <div className="ClientsHeaderPara">
            <label className="lblClientsHeaderPara">
              These are our happy clients who trusts us.
            </label>
          </div>

          <div className="ClientsSectionBody">
            <div className="ClientsClone">
              <div className="ClientsBox">
                <div className="ClientsIconBox">
                  <img className="ClientsFigure" src={Client1} />
                </div>
              </div>

              <div className="ClientsBox">
                <div className="ClientsIconBox">
                  <img className="ClientsFigure" src={Client2} />
                </div>
              </div>

              <div className="ClientsBox">
                <div className="ClientsIconBox">
                  <img className="ClientsFigure" src={Client3} />
                </div>
              </div>

              <div className="ClientsBox">
                <div className="ClientsIconBox">
                  <img className="ClientsFigure" src={Client4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
