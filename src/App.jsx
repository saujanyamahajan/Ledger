 import { useState } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction.jsx";
import RecentTransaction from "./components/RecentTransaction.jsx";
import TransactionGraph from "./components/TransactionGraph.jsx";

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
  const addTransaction = (transaction) => {
    setTransaction([...transactions, transaction]);
  };
  return (
    <>
      <h1>Finance Tracker </h1>
      <h4>Manage your income and expenses</h4>
      <AddTransaction onAdd={addTransaction} />
      <RecentTransaction transactions={transactions} />
      <TransactionGraph transactions={transactions}/>
    </>
  );
}

export default App;
