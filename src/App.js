import React, { useState, useEffect } from "react";
import "./App.css";
import Overview from "./components/Overview";
import GoalForm from "./components/GoalForm";
import DepositForm from "./components/DepositForm";
import GoalList from "./components/GoalList";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch("http://localhost:3001/goals");
        const data = await response.json();
        setGoals(data);
      } catch (error) {
        console.error("Error fetching goals:", error);
      }
    };
    fetchGoals();
  }, []);

  const addGoal = async (goal) => {
    try {
      const res = await fetch("http://localhost:3001/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(goal),
      });
      const newGoal = await res.json();
      setGoals((prevGoals) => [...prevGoals, newGoal]);
    } catch (err) {
      console.error("Error adding goal:", err);
    }
  };

  const updateGoal = async (updatedGoal) => {
    try {
      await fetch(`http://localhost:3001/goals/${updatedGoal.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedGoal),
      });

      setGoals((prevGoals) =>
        prevGoals.map((goal) =>
          goal.id === updatedGoal.id ? updatedGoal : goal
        )
      );
    } catch (err) {
      console.error("Error updating goal:", err);
    }
  };

  const deleteGoal = async (id) => {
    try {
      await fetch(`http://localhost:3001/goals/${id}`, {
        method: "DELETE",
      });

      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
    } catch (err) {
      console.error("Error deleting goal:", err);
    }
  };

  return (
    <div className="App">
  <h1>SMART Goal Planner</h1>
  <section className="overview"><Overview goals={goals} /></section>
  <section><GoalForm onAdd={addGoal} /></section>
  <section><DepositForm goals={goals} onUpdate={updateGoal} /></section>
  <section><GoalList goals={goals} onDelete={deleteGoal} onUpdate={updateGoal} /></section>
</div>

  );
}

export default App;
