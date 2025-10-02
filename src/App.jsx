import { useState, useEffect } from "react";

import "./App.css";
import AddTransaction from "./components/AddTransaction.jsx";
import RecentTransaction from "./components/RecentTransaction.jsx";
import TransactionGraph from "./components/TransactionGraph.jsx";
import AccountInfo from "./components/AccountInfo.jsx";
import sunIcon from "./icons/sun.svg";
import moonIcon from "./icons/moon.svg";

// ✅ MVP Features
// Add income & expense transactions
// Show balance (total income – total expenses)
// Transaction list with delete option
// ✅ Enhancements (after MVP)
// Categories (Food, Bills, Travel, etc.)
// Filtering by month/category
// Charts (Pie for categories, Line/Bar for monthly trend)
// Darklight mode
// Data persistence (LocalStorage or backend API later)

function App() {
  const [transactions, setTransaction] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("overview");
  // Load transactions from localStorage on first render
  useEffect(() => {
    const saveTransactions = localStorage.getItem("transactions");
    if (saveTransactions) {
      setTransaction(JSON.parse(saveTransactions));
    }
  }, []);
  // Save transactions to localStorage whenever they change
  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]);
  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  // console.log("Saved in localStorage:", localStorage.getItem("transactions"));

  const addTransaction = (transaction) => {
    // console.log("Adding transaction:", transaction);
    setTransaction([...transactions, transaction]);
  };
  const handleDelete = (index) => {
    setTransaction((t) => t.filter((_, i) => i !== index));
  };
  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <h1>Finance Tracker </h1>
      <div className="subHeading">
        <h4>Manage your income and expenses</h4>
        <button onClick={changeTheme}>
          <img
            src={theme === "light" ? moonIcon : sunIcon}
            alt="Toggle theme"
            style={{ width: "24px", height: "24px" }}
          />{" "}
        </button>
      </div>
      <AccountInfo transactions={transactions} />
      <div className="toggleBar">
        <button
          className={active === "overview" ? "active" : ""}
          onClick={() => setActive("overview")}
        >
          Overview
        </button>
        <button
          className={active === "charts" ? "active" : ""}
          onClick={() => setActive("charts")}
        >
          Charts
        </button>
        <button
          className={active === "transactions" ? "active" : ""}
          onClick={() => setActive("transactions")}
        >
          Transactions
        </button>
      </div>
      {active === "overview" && (
        <div className="formcard">
          <div className="formROW">
            <AddTransaction onAdd={addTransaction} />
          </div>
          <div className="formROW">
            <RecentTransaction
              transactions={transactions}
              onDelete={handleDelete}
            />
          </div>
        </div>
      )}

      {active === "charts" && <TransactionGraph transactions={transactions} />}

      {active === "transactions" && (
        <RecentTransaction
          transactions={transactions}
          onDelete={handleDelete}
        />
      )}
    </>
  );
}

export default App;
