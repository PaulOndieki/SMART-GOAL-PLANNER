import React, { useState, useEffect } from "react";

const GoalForm = ({ onSubmit, editGoal }) => {
  const [form, setForm] = useState({
    name: "",
    targetAmount: "",
    savedAmount: 0,
    category: "",
    deadline: "",
  });

  useEffect(() => {
    if (editGoal) setForm(editGoal);
  }, [editGoal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", targetAmount: "", savedAmount: 0, category: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="goal-form">
      <h3>{editGoal ? "Edit Goal" : "Add New Goal"}</h3>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Goal Name" required />
      <input name="targetAmount" type="number" value={form.targetAmount} onChange={handleChange} placeholder="Target Amount" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
      <input name="deadline" type="date" value={form.deadline} onChange={handleChange} required />
      <button type="submit">{editGoal ? "Update" : "Add"} Goal</button>
    </form>
  );
};

export default GoalForm;
