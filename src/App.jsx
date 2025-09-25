import { useState, useEffect } from "react";

import "./App.css";
import AddTransaction from "./components/AddTransaction.jsx";
import RecentTransaction from "./components/RecentTransaction.jsx";
import TransactionGraph from "./components/TransactionGraph.jsx";
import AccountInfo from "./components/AccountInfo.jsx";

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
  const [theme, setTheme] = useState("light");

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addTransaction = (transaction) => {
    setTransaction([...transactions, transaction]);
  };
  const handleDelete = (index) => {
    setTransaction((t) => t.filter((_, i) => i !== index));
  };
  return (
    <>
      <h1>Finance Tracker </h1>
      <h4>Manage your income and expenses</h4>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
      <AccountInfo transactions={transactions} />
      <AddTransaction onAdd={addTransaction} />
      <RecentTransaction transactions={transactions} onDelete={handleDelete} />
      <TransactionGraph transactions={transactions} />
    </>
  );
}

export default App;
