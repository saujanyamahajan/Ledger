// import { useState } from "react";
import "./RecentTransaction.css";

function RecentTransaction({ transactions, onDelete }) {
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
                <div className="transactionRow topRow">
                  <div className="metaLeft">
                    <span className="description">{t.description}</span>
                    <span className="category">{t.category}</span>
                  </div>
                  <span
                    className={`amount ${
                      t.type === "Income" ? "positive" : "negative"
                    }`}
                  >
                    {t.type === "Income"
                      ? `+₹${t.amount}`
                      : `-₹${Math.abs(t.amount)}`}
                  </span>
                </div>

                <div className="transactionRow bottomRow">
                  <span className="date">{t.date}</span> 

                  <button className="deleteBtn" onClick={() => onDelete(index)}>
                    Delete
                  </button>
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
