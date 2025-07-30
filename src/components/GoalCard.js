// src/components/GoalCard.js
import React from "react";

function GoalCard({ goal, onDelete, onEdit }) {
  const {
    name,
    targetAmount,
    savedAmount,
    category,
    deadline,
    createdAt,
    id,
  } = goal;

  const progressPercent = Math.min(
    Math.round((savedAmount / targetAmount) * 100),
    100
  );

  const handleDelete = () => {
    if (window.confirm(`Delete goal "${name}"?`)) {
      onDelete(id);
    }
  };

  return (
    <div className="card goal-card">
      <h3>{name}</h3>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Target:</strong> ${targetAmount.toLocaleString()}</p>
      <p><strong>Saved:</strong> ${savedAmount.toLocaleString()}</p>
      <p><strong>Deadline:</strong> {deadline}</p>
      <p><strong>Created:</strong> {new Date(createdAt).toLocaleDateString()}</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progressPercent}%`,
            backgroundColor: progressPercent >= 100 ? "#4CAF50" : "#2196F3",
          }}
        ></div>
      </div>
      <p>{progressPercent}% Complete</p>

      <div className="card-actions">
        <button onClick={() => onEdit(goal)}>Edit</button>
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default GoalCard;
