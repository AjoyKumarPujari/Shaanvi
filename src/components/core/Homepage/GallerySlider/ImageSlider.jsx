// ImageSlider.js
import React, { useState } from 'react';
import './ImageSlider.css'; // Import CSS file for styling (create this file)

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button" onClick={prevSlide}>
        Previous
      </button>
      <img className="slider-image" src={images[currentImageIndex]} alt="slide" />
      <button className="slider-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
