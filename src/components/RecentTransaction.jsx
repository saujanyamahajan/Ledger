import { useState } from "react";
import "./RecentTransaction.css";

function RecentTransaction({ transactions, onDelete }) {
  const [typeFilter, setTypeFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [monthFilter, setMonthFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  // Filter logic
  const filteredTransactions = transactions.filter((t) => {
    const matchType =
      typeFilter === "All" || t.type.toLowerCase() === typeFilter.toLowerCase();
    const matchCategory =
      categoryFilter === "All" ||
      t.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchMonth =
      monthFilter === "All" ||
      new Date(t.date).getMonth() + 1 === parseInt(monthFilter);

    return matchType && matchCategory && matchMonth;
  });

  const uniqueCategories = [
    "All",
    ...new Set(transactions.map((t) => t.category)),
  ];

  return (
    <div className="form">
      <div className="filterHeader">
        <h3>All Transactions</h3>
        <button
          className={`filterBtn ${showFilters ? "active" : ""}`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <span className="filterIcon">⚙️</span> Filters
        </button>
      </div>

      {/* Filters Dropdown */}
      {showFilters && (
        <div className="filters fadeIn">
          <div className="filterItem">
            <label>Type</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          <div className="filterItem">
            <label>Category</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {uniqueCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="filterItem">
            <label>Month</label>
            <select
              value={monthFilter}
              onChange={(e) => setMonthFilter(e.target.value)}
            >
              <option value="All">All Months</option>
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {new Date(0, i).toLocaleString("default", { month: "long" })}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Transaction List */}
      {filteredTransactions.length === 0 ? (
        <p>No Transactions Found</p>
      ) : (
        <ul className="transactionList">
          {filteredTransactions.map((t, index) => (
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
                  🗑
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecentTransaction;
