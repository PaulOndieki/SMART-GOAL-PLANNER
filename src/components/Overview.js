import React from "react";

function Overview({ goals }) {
  const totalGoals = goals.length;
  const completedGoals = goals.filter(
    (goal) => goal.savedAmount >= goal.targetAmount
  ).length;

  const totalSaved = goals.reduce(
    (sum, goal) => sum + goal.savedAmount,
    0
  );

  const completionRate = totalGoals
    ? Math.round((completedGoals / totalGoals) * 100)
    : 0;

  return (
    <div className="overview-dashboard">
      <h2>Overview</h2>
      <div className="overview-grid">
        <div className="overview-item">
          <h4>Total Goals</h4>
          <p>{totalGoals}</p>
        </div>

        <div className="overview-item">
          <h4>Goals Completed</h4>
          <p>{completedGoals} of {totalGoals} ({completionRate}%)</p>
        </div>

        <div className="overview-item">
          <h4>Total Saved</h4>
          <p>${totalSaved.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
