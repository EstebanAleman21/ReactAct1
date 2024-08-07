// src/App.jsx
import React, { useState } from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import HabitCard from './Components/habitCard';
import Button from './Components/button';
import Input from './Components/input';
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  const addHabit = () => {
    if (newHabit.trim() !== '') {
      setHabits([...habits, { name: newHabit, counter: 0 }]);
      setNewHabit('');
    }
  };

  const incrementCounter = (index) => {
    const newHabits = [...habits];
    newHabits[index].counter += 1;
    setHabits(newHabits);
  };

  const decrementCounter = (index) => {
    const newHabits = [...habits];
    if (newHabits[index].counter > 0) {
      newHabits[index].counter -= 1;
      setHabits(newHabits);
    }
  };

  const removeHabit = (index) => {
    const newHabits = habits.filter((_, i) => i !== index);
    setHabits(newHabits);
  };

  const resetHabit = (index) => {
    const newHabits = [...habits];
    if (newHabits[index].counter > 0) {
      newHabits[index].counter = 0;
      setHabits(newHabits);
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="input-group">
          <Input
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            placeholder="Enter a bad habit"
          />
          <Button onClick={addHabit}>Add Habit</Button>
        </div>
        <div className="habits-list">
          {habits.map((habit, index) => (
            <HabitCard
              key={index}
              habit={habit}
              increment={() => incrementCounter(index)}
              decrement={() => decrementCounter(index)}
              remove={() => removeHabit(index)}
              reset={() => resetHabit(index)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
