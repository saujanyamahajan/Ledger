import "./AccountInfo.css";

function AccountInfo({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = income - expense;
  return (
    <>
      <div className="form">
        {transactions.length === 0 ? (
          <p>No Transaction</p>
        ) : (
          <>
            <div className="card-container">
              <div className="card">
                <span>Total Balance: </span>
                <span
                  className={`totalBalance ${
                    balance>=0 ? "positive" : "negative"
                  }`}
                >
                  ₹{balance}
                </span>
              </div>
              <div className="card">
                <span>Total Income: </span>
                <span className="totalIncome">+₹{income}</span>
              </div>
              <div className="card">
                <span>Total Expense: </span>
                <span className="totalExpense">-₹{expense}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default AccountInfo;
