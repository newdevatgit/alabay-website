import React from 'react';
import './Box.css'; // reuse the same CSS file

function VerticalBox({ className, image, heading, subheading }) {
  return (
    <div className={`box ${className}`}>
      <h2 className="heading" style={{ fontFamily: 'CHEESEBURGA' }}>
        {heading}
      </h2>
      <img src={image} alt={heading} className="reflection-image" />
      <p className="subheading">{subheading}</p>
    </div>
  );
}

export default VerticalBox;