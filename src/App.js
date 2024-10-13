// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Box from "./components/Box";
import Box2 from "./components/Box2";
import Carousel from "./components/Carousel";
import ProductCarousel from "./components/ProductCarousel";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newOpacity = Math.min(scrollPosition / windowHeight, 1);
      setOpacity(newOpacity);
      setScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      <div className="background-image"></div>
      <div className="overlay" style={{ opacity: opacity }}></div>
      <div className={`content ${scrolled ? "visible" : ""}`}>
        <div className="content-inner">
          {/* Add more content as needed */}
          <div className="rectangle-background">
            <div className="rounded-rectangle"></div>
            <Box
              className="boxstyle1"
              image="/Alabay Assets/image1.png"
              heading={
                <span>
                  History Of <span>ALABAY</span>
                </span>
              }
              subheading="The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty."
            />
          </div>
          <Carousel />
          <Box2
            className="boxstyle2"
            heading="PROJECT VISION"
            image="https://github.com/newdevatgit/alabay-website/blob/41e1ab58d4c1872dd0e84039b2962c1c5aa23e14/public/Alabay%20Assets/image2.png?raw=true"
            subheading="Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together."
          />
          <div className="product-carousel-wrapper">
            <ProductCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
