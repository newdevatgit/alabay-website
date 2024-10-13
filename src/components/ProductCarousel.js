import React, { useState, useEffect } from 'react';
import './ProductCarousel.css';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    {
      image: '/Alabay Assets/Alabay Merch/black hoodie.png',
      backgroundImage: '/Alabay Assets/Alabay Merch/black hoodie bck.png',
      title: 'Black Hoodie',
      description: 'This is a black hoodie',
    },
    {
      image: '/Alabay Assets/Alabay Merch/cap mockup.png',
      backgroundImage: '/Alabay Assets/Alabay Merch/blue cap bck.png',
      title: 'Blue Cap',
      description: 'This is a blue cap',
    },
    {
      image: '/Alabay Assets/Alabay Merch/pink tshirt.png',
      backgroundImage: '/Alabay Assets/Alabay Merch/pink tee bck.png',
      title: 'Pink T-Shirt',
      description: 'This is a pink t-shirt',
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
        <div className="product-discover-button">
          <button>Discover</button>
        </div>
        <div className="product-arrows">
          <button className="product-prev-arrow" onClick={handlePrev}>
            <i className="fas fa-chevron-left" />
          </button>
          <button className="product-next-arrow" onClick={handleNext}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
        <div className="product-text-boxes">
          <div className="product-bottom-left">
            <p>{products[currentIndex].description}</p>
          </div>
          <div className="product-top-right">
            <p>{products[currentIndex].title}</p >
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;