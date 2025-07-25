import React, { useState, useEffect } from 'react';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import DepositForm from './components/DepositForm';
import Overview from './components/Overview';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/goals')
      .then(res => res.json())
      .then(setGoals);
  }, []);

  const addGoal = (goal) => {
    fetch('http://localhost:3001/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goal)
    })
      .then(res => res.json())
      .then(newGoal => setGoals([...goals, newGoal]));
  };

  const updateGoal = (updatedGoal) => {
    fetch(`http://localhost:3001/goals/${updatedGoal.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGoal)
    })
      .then(() => {
        setGoals(goals.map(goal => goal.id === updatedGoal.id ? updatedGoal : goal));
      });
  };

  const deleteGoal = (id) => {
    fetch(`http://localhost:3001/goals/${id}`, {
      method: 'DELETE'
    })
      .then(() => setGoals(goals.filter(goal => goal.id !== id)));
  };

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <Overview goals={goals} />
      <GoalForm onAdd={addGoal} />
      <DepositForm goals={goals} onUpdate={updateGoal} />
      <GoalList goals={goals} onDelete={deleteGoal} onUpdate={updateGoal} />
    </div>
  );
}

export default App;

