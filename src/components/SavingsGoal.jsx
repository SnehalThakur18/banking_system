import React, { useState, useEffect, useRef } from "react";
import SavingsGoalComparison from "./SavingsGoalComparison";
import { useNavigate } from "react-router-dom";

const SavingsGoal = ({ balance, setSavingsGoal }) => {
  const [savingsGoal, setLocalSavingsGoal] = useState(0);
  const isMounted = useRef(true);

  const navigate = useNavigate();

  const handleAmountChange = (e) => {
    const amount = e.target.value;
    // Check if the amount is a valid number
    if (/^\d*$/.test(amount)) {
      setLocalSavingsGoal(amount);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      const savedLatestSavingsGoal = localStorage.getItem("savingsGoal");
      setLocalSavingsGoal(savedLatestSavingsGoal ? parseFloat(savedLatestSavingsGoal) : 0);
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem("savingsGoal");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      isMounted.current = false;
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("savingsGoal", savingsGoal);
  }, [savingsGoal]);

  return (
    <div className="container">
      <div className="card">
        <h2>Savings Goals</h2>

        <label>Savings Goal:</label>
        <div className="input-group">
          <input
            type="text"
            value={savingsGoal}
            onChange={handleAmountChange}
          />
        </div>
        <SavingsGoalComparison balance={balance} savingsGoal={savingsGoal} />
        <div className="btn-container">
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavingsGoal;
