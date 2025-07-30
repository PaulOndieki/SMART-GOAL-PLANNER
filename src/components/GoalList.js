import React from "react";
import GoalCard from "./GoalCard";

function GoalList({ goals, onDelete, onUpdate }) {
  if (goals.length === 0) {
    return <p className="empty-message">No goals yet—add one to get started!</p>;
  }

  return (
    <div className="goal-list">
      <h2>My Goals</h2>
      {goals.map((goal) => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onDelete={onDelete}
          onEdit={onUpdate}
        />
      ))}
    </div>
  );
}

export default GoalList;
