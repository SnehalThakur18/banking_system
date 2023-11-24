import React from "react";
import { useState } from "react";
import TransactionModal from "../Modals/TransactionModal";
import TransactionHistory from "./TransactionHistory";

const Account = ({ balance, transactions, onDeposit, onWithdraw }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (text) => {
    let data = {
      modalType: text,
      isModalOpen: true,
    };
    setModalOpen(data);
  };

  const closeModal = () => {
    let data = {
      isModalOpen: false,
    };
    setModalOpen(data);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Account Overview</h2>
        <p>Balance: {isNaN(balance) ? 0 : balance}</p>
        <div className="btn-container">
          <button
            className="btn btn-primary"
            onClick={() => openModal("Deposit")}
          >
            Deposit Amount
          </button>
          <button
            className="btn btn-primary"
            onClick={() => openModal("Withdraw")}
          >
            Withdraw Amount
          </button>
        </div>
      </div>
      <TransactionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onDeposit={onDeposit}
        onWithdraw={onWithdraw}
      />
      <div className="card">
        <h3>Transaction History</h3>
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
};

export default Account;
