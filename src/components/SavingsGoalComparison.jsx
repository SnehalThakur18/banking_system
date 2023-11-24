import React from "react";

const SavingsGoalComparison = ({ balance, savingsGoal }) => {
  const calculatePercent = () => {
    if (savingsGoal >= 0) {
      return savingsGoal !== 0 ? ((balance / savingsGoal) * 100).toFixed(2) : 0;
    } else {
      return 0;
    }
  };

  return (
    <div>
      <h4>Savings Goal Comparison:</h4>
      <p>Current Balance: ${balance}</p>
      <p>Savings Goal: ${isNaN(savingsGoal) ? 0 : savingsGoal}</p>
      <p>Progress: {calculatePercent()}%</p>
    </div>
  );
};

export default SavingsGoalComparison;
