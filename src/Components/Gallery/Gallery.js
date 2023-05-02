import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <section className="GallerySection" id="GallerySection">
        <div className="containerGallery">
          <div className="GalleryHeader">
            <label className="lblGalleryHeader">Welcome to Our Gallery</label>
          </div>
          <div className="GalleryMainBody">
            <div className="GalleryImageDiv">
              <div className="GalleryClone">
                <div className="GalleryBox">
                  <div className="GalleryImageBox"></div>
                </div>
                <div className="GalleryBox">
                  <div className="GalleryImageBox"></div>
                </div>
                <div className="GalleryBox">
                  <div className="GalleryImageBox"></div>
                </div>
                <div className="GalleryBox">
                  <div className="GalleryImageBox"></div>
                </div>
                <div className="GalleryBox">
                  <div className="GalleryImageBox"></div>
                </div>
                <div className="GalleryBox">
                  <div className="GalleryImageBox"></div>
                </div>
                <div className="GalleryBox">
                  <div className="GalleryImageBox"></div>
                </div>
                <div className="GalleryBox">
                  <div className="GalleryImageBox"></div>
                </div>
                <div className="GalleryBox">
                  <div className="GalleryImageBox"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
