import React from "react";

const SavingsGoalComparison = ({ balance, savingsGoal }) => {
  const numericSavingsGoal = parseFloat(savingsGoal);
  const calculatePercent = () => {
    if (!isNaN(numericSavingsGoal) && numericSavingsGoal >= 0) {
      return numericSavingsGoal !== 0 ? ((balance / numericSavingsGoal) * 100).toFixed(2) : 0;
    } else {
      return 0;
    }
  };

  return (
    <div>
      <h4>Savings Goal Comparison:</h4>
      <p>Current Balance: ${balance.toLocaleString()}</p>
      <p>Savings Goal: ${isNaN(numericSavingsGoal) ? 0 : numericSavingsGoal.toLocaleString()}</p>
      <p>Progress: {calculatePercent()}%</p>
    </div>
  );
};

export default SavingsGoalComparison;
