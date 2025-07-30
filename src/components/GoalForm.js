// src/components/GoalForm.js
import React, { useState, useEffect } from "react";

const initialFormState = {
  name: "",
  targetAmount: "",
  category: "",
  deadline: "",
  savedAmount: 0,
};

function GoalForm({ onAdd, editingGoal }) {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (editingGoal) {
      setFormData(editingGoal);
    } else {
      setFormData(initialFormState);
    }
  }, [editingGoal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidAmount = parseFloat(formData.targetAmount) > 0;
    const isValidDeadline = new Date(formData.deadline) > new Date();

    if (!formData.name || !isValidAmount || !isValidDeadline) {
      alert("Please complete all fields with valid values.");
      return;
    }

    const newGoal = {
      ...formData,
      targetAmount: parseFloat(formData.targetAmount),
      savedAmount: editingGoal ? formData.savedAmount : 0,
      createdAt: editingGoal?.createdAt || new Date().toISOString(),
    };

    onAdd(newGoal);
    setFormData(initialFormState);
  };

  return (
    <form className="form goal-form" onSubmit={handleSubmit}>
      <h2>{editingGoal ? "Edit Goal" : "Add New Goal"}</h2>

      <input
        type="text"
        name="name"
        placeholder="Goal Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="targetAmount"
        placeholder="Target Amount"
        value={formData.targetAmount}
        onChange={handleChange}
        min="1"
        required
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        <option value="Travel">Travel ✈️</option>
        <option value="Emergency">Emergency 🚨</option>
        <option value="Education">Education 📚</option>
        <option value="Personal">Personal 💼</option>
        <option value="Other">Other 🗂️</option>
      </select>

      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingGoal ? "Update Goal" : "Add Goal"}
      </button>
    </form>
  );
}

export default GoalForm;
