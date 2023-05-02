import React from "react";
import "./Footer.css";
import Logo from "../../Assets/Images/yas1-removebg-preview.png";

const Footer = () => {
  return (
    <>
      <section className="FooterSection" id="ContactSection">
        <div className="containerFooter">
          <div className="footerLeftRightSection">
            <div className="FooterLeftSection">
              <div className="card-Footer">
                <div className="ThumbnailHolder">
                  <img alt="YAS" className="imglogoyas" src={Logo}></img>
                </div>
                <div className="card-body-Footer">
                  <label className="lbl-card-body-Footer">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque repellendus animi deserunt magnam cum libero maiores
                    soluta omnis ad? Esse nesciunt, minus dolore voluptatum
                    fugit tenetur ipsum nemo perferendis aspernatur!
                  </label>
                </div>
              </div>
            </div>
            <div className="FooterRightSection">
              <div className="FooterRighSectiontIconHolder">
                <a href="https://instagram.com">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com">
                  <i class="fab fa-whatsapp"></i>
                </a>

                <a href="https://instagram.com">
                  <i class="fab fa-skype"></i>
                </a>

                <a href="https://instagram.com">
                  <i class="far fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
