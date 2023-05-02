import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import RaziImg from "../../Assets/Images/razi.png";

const imageData = [
  {
    id: 1,
    name: "Mohammad Malik",
    designation: "CEO",
    description:
      "Founder and Co-Founder Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Founder and Co-Founder Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    imgUrl:
      "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Soheb Memon",
    designation: "CEO",
    description:
      "CEO and Co-Founder Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.CEO and Co-Founder Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    imgUrl:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Prakash Sharma",
    designation: "Web Developer",
    description:
      "Founder and Co-Founder Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Founder and Co-Founder Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    imgUrl:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Armash Ansari",
    designation: "React Developer",
    description:
      "React Developer Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.React Developer Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    imgUrl:
      "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Faizan Haroon",
    designation: "FullStack Developer",
    description:
      "Fullstack developer Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Fullstack developer Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    imgUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  // more image data objects here
];
const Testimonials = () => {
  const [selectedImage, setSelectedImage] = useState(true);

  const handleImageClick = (id) => {
    const imageObject = imageData.find((image) => image.id === id);
    setSelectedImage(imageObject);
  };

  useEffect(() => {
    handleImageClick(1);
  }, []);
  return (
    <>
      <section className="TestimonialsSection">
        <div className="containerTestimonials">
          <div className="testimonialsHeader">
            <label className="lbltestimonialsHeader">Testimonials</label>
          </div>
          <div className="testimonialParaContainer">
            <label className="lbltestimonialPara">
              Our Team Consists Only of the Best Talents.
            </label>
          </div>
          <div className="TestimonialsMainBody">
            <div className="testimonialsImage">
              <div className="testimonialsClone">
                <div
                  className={
                    selectedImage.id === 1
                      ? "testimonialsBox active"
                      : "testimonialsBox"
                  }
                  onClick={() => {
                    handleImageClick(1);
                  }}
                >
                  <div className="testimonialsImageBox"></div>
                </div>
                <div
                  className={
                    selectedImage.id === 2
                      ? "testimonialsBox active"
                      : "testimonialsBox"
                  }
                  onClick={() => {
                    handleImageClick(2);
                  }}
                >
                  <div className="testimonialsImageBox"></div>
                </div>
                <div
                  className={
                    selectedImage.id === 3
                      ? "testimonialsBox active"
                      : "testimonialsBox"
                  }
                  onClick={() => {
                    handleImageClick(3);
                  }}
                >
                  <div className="testimonialsImageBox"></div>
                </div>
                <div
                  className={
                    selectedImage.id === 4
                      ? "testimonialsBox active"
                      : "testimonialsBox"
                  }
                  onClick={() => {
                    handleImageClick(4);
                  }}
                >
                  <div className="testimonialsImageBox"></div>
                </div>
                <div
                  className={
                    selectedImage.id === 5
                      ? "testimonialsBox active"
                      : "testimonialsBox"
                  }
                  onClick={() => {
                    handleImageClick(5);
                  }}
                >
                  <div className="testimonialsImageBox"></div>
                </div>
              </div>
            </div>

            {selectedImage && (
              <div className="testimonialsDescription">
                <div className="testimonialsdescriptionHolder">
                  <div className="TesimonialNameContainer">
                    <label className="lblTestimonialName">
                      {selectedImage.name}
                    </label>
                  </div>

                  <div className="testimonierdescriptionContainer">
                    <img src={selectedImage.imgUrl} alt={selectedImage.name} />
                    <label className="lblTestimonialDesc">
                      {selectedImage.description}
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
