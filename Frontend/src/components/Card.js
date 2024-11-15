// src/components/Card.js
import React from 'react';

const Card = ({ title, text, buttonLabel, imageUrl, onButtonClick }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img src={imageUrl} className="card-img-top" alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;
