import moneyIcon from "../icons/money.svg";
import trendingUp from "../icons/trending_up.svg";
import trendingDown from "../icons/trending_down.svg";
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
    <div className="form">
      {transactions.length === 0 ? (
        <p>No Transaction</p>
      ) : (
        <div className="card-container">
          {/* Balance Card */}
          <div className="card">
            <div className="card-header">
              <h3>Total Balance</h3>
              <img src={moneyIcon} alt="Balance" className="card-icon" />
            </div>
            <span
              className={`totalBalance ${balance >= 0 ? "positive" : "negative"}`}
            >
              ₹{balance}
            </span>
          </div>

          {/* Income Card */}
          <div className="card">
            <div className="card-header">
              <h3>Total Income</h3>
              <img src={trendingUp} alt="Income" className="card-icon" />
            </div>
            <span className="totalIncome">+₹{income}</span>
          </div>

          {/* Expense Card */}
          <div className="card">
            <div className="card-header">
              <h3>Total Expense</h3>
              <img src={trendingDown} alt="Expense" className="card-icon" />
            </div>
            <span className="totalExpense">-₹{expense}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountInfo;
