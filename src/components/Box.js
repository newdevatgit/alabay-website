import React from 'react';
import './Box.css';

const Box = ({ image, heading, subheading, className }) => {
  return (
    <div className={`box-container ${className}`}>
      <div className="image-container">
        <img src={image} alt={heading} className="main-image" />
        <img src={image} alt={heading} className="reflection-image" />
      </div>
      <div className="text-container">
        <h2 className="heading">{heading}</h2>
        <p className="subheading">{subheading}</p>
      </div>
    </div>
  );
};

export default Box;