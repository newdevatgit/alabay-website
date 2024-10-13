import React, { useState, useEffect } from "react";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    {
      image:
        "https://github.com/newdevatgit/alabay-website/blob/41e1ab58d4c1872dd0e84039b2962c1c5aa23e14/public/Alabay%20Assets/Alabay%20Merch/black%20hoodie.png?raw=true",
      backgroundImage:
        "https://github.com/newdevatgit/alabay-website/blob/41e1ab58d4c1872dd0e84039b2962c1c5aa23e14/public/Alabay%20Assets/Alabay%20Merch/black%20hoodie%20bck.png?raw=true",
    },
    {
      image:
        "https://github.com/newdevatgit/alabay-website/blob/41e1ab58d4c1872dd0e84039b2962c1c5aa23e14/public/Alabay%20Assets/Alabay%20Merch/cap%20mockup.png?raw=true",
      backgroundImage:
        "https://github.com/newdevatgit/alabay-website/blob/41e1ab58d4c1872dd0e84039b2962c1c5aa23e14/public/Alabay%20Assets/Alabay%20Merch/blue%20cap%20bck.png?raw=true",
    },
    {
      image:
        "https://github.com/newdevatgit/alabay-website/blob/41e1ab58d4c1872dd0e84039b2962c1c5aa23e14/public/Alabay%20Assets/Alabay%20Merch/pink%20tshirt.png?raw=true",
      backgroundImage:
        "https://github.com/newdevatgit/alabay-website/blob/41e1ab58d4c1872dd0e84039b2962c1c5aa23e14/public/Alabay%20Assets/Alabay%20Merch/pink%20tee%20bck.png?raw=true",
    },
    {
      image:
        "https://github.com/newdevatgit/alabay-website/blob/41e1ab58d4c1872dd0e84039b2962c1c5aa23e14/public/Alabay%20Assets/Alabay%20Merch/yellow%20tshirt.png?raw=true",
      backgroundImage:
        "https://github.com/newdevatgit/alabay-website/blob/41e1ab58d4c1872dd0e84039b2962c1c5aa23e14/public/Alabay%20Assets/Alabay%20Merch/yellow%20tee%20bck.png?raw=true",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // change every 5 seconds
    return () => clearInterval(intervalId);
  }, [handleNext]);

  return (
    <div className="product-carousel-container">
      <div
        className="product-background-image"
        style={{
          backgroundImage: `url(${products[currentIndex].backgroundImage})`,
        }}
      />
      <div className="product-carousel-inner">
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].title}
          className="product-image"
        />
        <div className="product-text-boxes">
          <div className="product-bottom-left">
            <h2>{products[currentIndex].title}</h2>
            <p>{products[currentIndex].description}</p>
          </div>
        </div>
        <div className="product-arrows">
          <button className="product-prev-arrow" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="product-next-arrow" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
