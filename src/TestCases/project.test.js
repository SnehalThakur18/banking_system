import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Header from "../components/header";
import TransactionHistory from "../components/TransactionHistory";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("App component", () => {
  test("renders App component", () => {
    render(<App />);
  });

  describe("Header component", () => {
    test("renders Header component", () => {
      render(<Header />);
      expect(screen.getByText("Banking System")).toBeInTheDocument();
    });
  });

  describe("TransactionHistory Component", () => {
    it("renders transaction history table with correct headers", () => {
      const transactions = [
        {
          type: "Deposit",
          amount: 10000,
          remarks: "Deposit additional amount",
        },
        {
          type: "Withdrawal",
          amount: 4500,
          remarks: "Amount amount withdraw from bank",
        },
      ];

      render(<TransactionHistory transactions={transactions} />);

      expect(screen.getByText("Transaction Type")).toBeInTheDocument();
      expect(screen.getByText("Amount")).toBeInTheDocument();
      expect(screen.getByText("Remarks")).toBeInTheDocument();
    });

    it("renders transaction rows with correct data", () => {
      const transactions = [
        {
          type: "Deposit",
          amount: 10000,
          remarks: "Deposit additional amount",
        },
        {
          type: "Withdrawal",
          amount: 4500,
          remarks: "Amount amount withdraw from bank",
        },
      ];

      render(<TransactionHistory transactions={transactions} />);

      expect(screen.getByText("Deposit")).toBeInTheDocument();
      expect(screen.getByText(/\$10,000/)).toBeInTheDocument();
      expect(screen.getByText("Deposit additional amount")).toBeInTheDocument();

      expect(screen.getByText("Withdrawal")).toBeInTheDocument();
      expect(screen.getByText(/\$4,500/)).toBeInTheDocument();
      expect(
        screen.getByText("Amount amount withdraw from bank")
      ).toBeInTheDocument();
    });

    it("handles empty transactions array", () => {
      render(<TransactionHistory transactions={[]} />);

      expect(screen.queryByRole("table")).not.toBeInTheDocument();
    });
  });
});
