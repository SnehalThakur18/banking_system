// SavingsGoals.js
import React, { useState } from "react";
import SavingsGoalComparison from "./SavingsGoalComparison";

const SavingsGoal = ({ balance }) => {
  const [savingsGoal, setSavingsGoal] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h2>Savings Goals</h2>

        <label>Savings Goal:</label>
        <div className="input-group">
          <input
            type="number"
            value={savingsGoal}
            onChange={(e) => setSavingsGoal(parseFloat(e.target.value))}
          />
        </div>
        <SavingsGoalComparison balance={balance} savingsGoal={savingsGoal} />
      </div>
    </div>
  );
};

export default SavingsGoal;
