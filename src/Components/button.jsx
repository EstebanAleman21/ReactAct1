// src/Button.jsx
import React from 'react';
import '../CSS/Button.css';

const Button = ({ onClick, children }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
