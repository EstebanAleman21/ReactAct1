// src/HabitCard.jsx
import React from 'react';
import '../CSS/HabitCard.css';

const HabitCard = ({ habit, increment, decrement, remove, reset }) => {
  return (
    <div className="habit-card">
      <h3>{habit.name}</h3>
      <p>Days without: {habit.counter}</p>
      <div className="button-group">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={remove}>Delete</button>
      </div>
    </div>
  );
};

export default HabitCard;
