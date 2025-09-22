// import { useState } from "react";

function RecentTransaction({ transactions }) {
  return (
    <> 
    <div className="Form">
      <h3>Recent Transactions</h3>
      {transactions.length === 0 ? (
        <p>No Transactions</p>
      ) : (
        <ul>
          {transactions.map((t, index) => (
            <li key={index}>
              {t.type} - {t.amount} - {t.description} - {t.category}
            </li>
          ))}
        </ul>
      )}
      </div>
    </>
  );
}

export default RecentTransaction;
