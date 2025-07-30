import React from "react";
import "./App.css";

function Overview({ goals }) {
  const totalGoals = goals.length;
  const completedGoals = goals.filter(
    (goal) => goal.currentAmount >= goal.targetAmount
  ).length;

  const completionRate =
    totalGoals > 0
      ? Math.round((completedGoals / totalGoals) * 100)
      : 0;

  const totalSaved = goals.reduce(
    (sum, goal) => sum + Number(goal.currentAmount),
    0
  );

  return (
    <div className="overview">
      <h2>Goal Overview</h2>

      <div className="stat-block">
        <div className="stat-label">Total Goals</div>
        <div className="stat-value">{totalGoals}</div>
      </div>

      <div className="stat-block">
        <div className="stat-label">Completed</div>
        <div className="stat-value">
          {completedGoals} of {totalGoals} ({completionRate}%)
        </div>
      </div>

      <div className="stat-block">
        <div className="stat-label">Total Saved</div>
        <div className="stat-value">${totalSaved.toLocaleString()}</div>
      </div>
    </div>
  );
}

export default Overview;
