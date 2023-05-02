import React from "react";
import Landing from "../../Components/Landing/Landing";
import Services from "../../Components/Services/Services";
import Technology from "../../Components/Technology/Technology";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Clients from "../../Components/Clients/Clients";
import About from "../../Components/About/About";
import Gallery from "../../Components/Gallery/Gallery";
import Careers from "../../Components/Careers/Careers";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Landing />
      <Services />
      <Technology />
      <Testimonials />
      <Clients />
      <About />
      <Gallery />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
