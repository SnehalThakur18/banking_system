import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/header";
import Account from "./components/Account";
import SavingsGoal from "./components/SavingsGoal";
import "./index.css";

function App() {
  const [balance, setBalance] = useState(1000000);
  const [transactions, setTransactions] = useState([]);
  const [savingsGoal, setSavingsGoal] = useState(0);

  const handleDeposit = (amount, remarks) => {
    const numericAmountOnly = parseFloat(amount);
    if (!isNaN(numericAmountOnly) && numericAmountOnly > 0) {
      setBalance(balance + numericAmountOnly);
      updateTransactions("Deposit", numericAmountOnly, remarks);
    }
  };

  const handleWithdraw = (amount, remarks) => {
    console.log("show amoun",amount)
    const numericAmountOnly = parseFloat(amount);
    if (!isNaN(numericAmountOnly) && numericAmountOnly > 0 && balance - numericAmountOnly >= 0) {
      setBalance(balance - numericAmountOnly);
      updateTransactions("Withdrawal", numericAmountOnly, remarks);
    } else {
      alert("Invalid withdrawal amount or insufficient funds");
    }
  };

  const updateTransactions = (type, amount, remarks) => {
    const newTransaction = {
      type,
      amount,
      remarks,
      timestamp: new Date().toLocaleString(),
    };
    setTransactions([...transactions, newTransaction]);
  };

  const handleSetGoal = (goal) => {
    setSavingsGoal(goal);
  };

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Account
                balance={balance}
                transactions={transactions}
                onDeposit={handleDeposit}
                onWithdraw={handleWithdraw}
                onSetGoal={handleSetGoal}
              />
            }
          />
          <Route
            path="/savingsGoal"
            element={
              <SavingsGoal balance={balance} savingsGoal={savingsGoal} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
