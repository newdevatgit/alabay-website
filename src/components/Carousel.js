import React, { useState, useEffect } from 'react';
import './Carousel.css';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZxoSou3JIn3eoi9svWT2GTK2Ra2xEknXIQ&s', title: 'Photo 1' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPVyc4LETd6GWTNZWJCuiBWoEI3w5yHZeoA&s', title: 'Photo 2' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZxoSou3JIn3eoi9svWT2GTK2Ra2xEknXIQ&s', title: 'Photo 3' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_zmg91EHjLzYPpiWXbnP34qRa7_B3pK6uA&s', title: 'Photo 4' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZxoSou3JIn3eoi9svWT2GTK2Ra2xEknXIQ&s', title: 'Photo 5' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_zmg91EHjLzYPpiWXbnP34qRa7_B3pK6uA&s', title: 'Photo 6' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides.length - 2));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {[0, 1, 2].map((offset) => (
          <div key={offset} className="carousel-slide">
            <img
              src={slides[(currentIndex + offset) % slides.length].image}
              alt={slides[(currentIndex + offset) % slides.length].title}
            />
            <div className="slide-text">
              <h3>{slides[(currentIndex + offset) % slides.length].title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;