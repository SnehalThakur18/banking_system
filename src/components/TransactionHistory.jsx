import React from "react";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Transaction Type</th>
          <th>Amount</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.type}</td>
            <td>${transaction.amount}</td>
            <td>{transaction.remarks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
