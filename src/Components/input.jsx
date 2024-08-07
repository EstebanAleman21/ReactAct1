// src/Input.jsx
import React from 'react';
import '../CSS/Button.css';

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="custom-input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
