import { useState } from "react";
import Header from "./components/header";
import Account from "./components/Account";
import SavingsGoal from "./components/SavingsGoal";
import "./index.css";

function App() {
  const [balance, setBalance] = useState(1000000);
  const [transactions, setTransactions] = useState([]);
  const [savingsGoal, setSavingsGoal] = useState(0);

  const handleDeposit = (amount, remarks) => {
    if (amount > 0) {
      setBalance(balance + amount);
      updateTransactions("Deposit", amount, remarks);
    }
  };

  const handleWithdraw = (amount, remarks) => {
    if (amount > 0 && balance - amount >= 0) {
      setBalance(balance - amount);
      updateTransactions("Withdrawal", amount, remarks);
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
      <Header />
      <Account
        balance={balance}
        transactions={transactions}
        onDeposit={handleDeposit}
        onWithdraw={handleWithdraw}
        onSetGoal={handleSetGoal}
      />
      <SavingsGoal balance={balance} />
    </div>

  );
}

export default App;
