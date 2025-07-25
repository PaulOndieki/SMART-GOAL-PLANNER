import React from "react";

const Overview = ({ goals }) => {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const goalsCompleted = goals.filter((g) => g.savedAmount >= g.targetAmount).length;

  return (
    <div className="overview">
      <h3>Overview</h3>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: ${totalSaved.toLocaleString()}</p>
      <p>Goals Completed: {goalsCompleted}</p>
    </div>
  );
};

export default Overview;
