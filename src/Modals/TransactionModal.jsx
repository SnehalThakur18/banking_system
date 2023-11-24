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
  return (
    <div
      className="container"
      style={{ display: isOpen?.isModalOpen ? "block" : "none" }}
    >
      <div className="modal">
        <div className="modal-content">
          <h4>Transaction Form</h4>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
          <label>Remarks:</label>
          <input
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
