import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="ContactSection" id="ContactSection">
        <div className="containerContact">
          <div className="contactHeader">
            <label className="lblContactHeader">Feel free to Contact Us</label>
          </div>
          <div className="ContactSectionHolder">
            <div className="contactFormControlSection">
              <div className="ContactTypeBox">
                <i class="fas fa-phone contactTypeIcon"></i>
                <label className="lblTypeName">+966-55-169-4788</label>
              </div>
              <div className="ContactTypeBox">
                <i class="fas fa-envelope contactTypeIcon"></i>
                <label className="lblTypeName">impulseglobal@gmail.com</label>
              </div>
              <div className="ContactTypeBox">
                <i class="fas fa-map-marked-alt contactTypeIcon"></i>
                <label className="lblTypeName">Bhiwandi, India</label>
              </div>
            </div>
            <div className="contactMapSection">
              <div className="ContactInputBox">
                <div className="InputBoxHolder">
                  <input
                    type="text"
                    placeholder="Name"
                    className="contact-form-control"
                  />
                </div>
                <div className="InputBoxHolder">
                  <input
                    type="text"
                    placeholder="Email"
                    className="contact-form-control"
                  />
                </div>
                <div className="InputBoxHolder">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="contact-form-control"
                  />
                </div>
                <div className="InputBoxHolder">
                  <input
                    type="text"
                    placeholder="Message"
                    className="contact-form-control"
                  />
                </div>
                <div className="InputBoxHolder">
                  <input type="submit" className="btnSubmitDetails" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
