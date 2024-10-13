import React from 'react';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="header">
        <h1>WELCOME TO ALABAY WORLD</h1>
      </div>
      <div className="content">
        <p>
          WHERE THE LEGENDARY CENTRAL ASIAN SHEPHERD DOG MEETS A NEW-AGE
          ADVENTURE.
        </p>
        <p>
          JOIN US IN CELEBRATING THE STRENGTH, LOYALTY, AND HERITAGE OF THE
          ALABAY BREED.
        </p>
        <div className="button-container">
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
