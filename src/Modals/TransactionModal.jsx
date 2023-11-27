import React from "react";
import { useState } from "react";

const TransactionModal = ({ isOpen, onClose, onDeposit, onWithdraw }) => {
  const [amount, setAmount] = useState(0);
  const [remark, setRemark] = useState("");

  const handleDeposit = () => {
    onDeposit(amount, remark);
    resetForm();
    onClose();
  };

  const handleWithdraw = () => {
    onWithdraw(amount, remark);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setAmount(0);
    setRemark("");
  };

  const handleAmountChange = (e) => {
    const amount = e.target.value;
    // Check if the amount is a valid number
    if (/^\d*$/.test(amount)) {
      setAmount(amount);
    }
  };

  return (
    <div
      className="container"
      style={{ display: isOpen?.isModalOpen ? "block" : "none" }}
    >
      <div className="modal">
        <div className="modal-content">
          <h4>Transaction Form</h4>
          <label htmlFor="amountInput">Amount:</label>
          <input id="amountInput"
            type="text"
            value={amount}
            onChange={handleAmountChange}
          />
          <label htmlFor="remarksInput">Remarks:</label>
          <input id="remarksInput"
            type="text"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
          <div className="btn-container">
            <button
              className={
                isOpen?.modalType === "Deposit"
                  ? "btn btn-primary"
                  : "hide btn btn-primary"
              }
              onClick={handleDeposit}
            >
              Deposit
            </button>
            <button
              className={
                isOpen?.modalType === "Withdraw"
                  ? "btn btn-primary"
                  : "hide btn btn-primary"
              }
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
            <button className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
