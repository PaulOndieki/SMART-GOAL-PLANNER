import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./GoalCard.css";

const GoalCard = ({ goal, onDelete, onEdit }) => {
  const percentage = (goal.savedAmount / goal.targetAmount) * 100;
  const now = new Date();
  const deadline = new Date(goal.deadline);
  const daysLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));

  let status = "";
  if (percentage >= 100) status = "Completed";
  else if (daysLeft <= 0) status = "Overdue";
  else if (daysLeft <= 30) status = "⚠️ Near Deadline";

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p><strong>Category:</strong> {goal.category}</p>
      <p><strong>Target:</strong> ${goal.targetAmount.toLocaleString()}</p>
      <p><strong>Saved:</strong> ${goal.savedAmount.toLocaleString()}</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Deadline:</strong> {goal.deadline} ({daysLeft} days left)</p>
      <div className="actions">
        <button onClick={() => onEdit(goal)}><FaEdit /></button>
        <button onClick={() => onDelete(goal.id)}><FaTrash /></button>
      </div>
    </div>
  );
};

export default GoalCard;

