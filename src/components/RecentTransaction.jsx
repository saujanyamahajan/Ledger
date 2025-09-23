// import { useState } from "react";
import "./RecentTransaction.css";

function RecentTransaction({ transactions }) {
  return (
    <>
      <div className="form">
        <h3>Recent Transactions</h3>
        {transactions.length === 0 ? (
          <p>No Transactions</p>
        ) : (
          <ul className="transactionList">
            {transactions.map((t, index) => (
              <li key={index} className="transactionCard">
                <div className="transactionTop">
                  <span className="transactionDescription">
                    {t.description}
                  </span>
                  <span
                    className={`transactionAmount ${
                      t.type === "Income" ? "positive" : "negative"
                    }`}
                  >
                    {t.type === "Income"
                      ? `+₹${t.amount}`
                      : `-₹${Math.abs(t.amount)}`}
                  </span>
                </div>
                <div className="transactionBottom">
                  <span className="transactionType">{t.type}</span>
                  <span className="transactionDate">{t.date}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default RecentTransaction;
