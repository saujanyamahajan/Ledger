import { useState } from "react";
import "./AddTransaction.css";

function AddTransaction({ onAdd }) {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const incomeCategories = [
    "Salary",
    "Freelance",
    "Investment",
    "Gift",
    "Other",
  ];
  const expenseCategories = [
    "Food",
    "Bills",
    "Travel",
    "Shopping",
    "Healthcare",
    "Entertainment",
    "Other",
  ];

  const btnAddTransaction = () => {
    if (!type || !amount || !description || !category) return;
    const date = new Date().toISOString().split("T")[0];
    onAdd({ type, amount: Number(amount), description, category, date });
    setType("");
    setAmount("");
    setDescription("");
    setCategory("");
  };

  const availableCategories =
    type === "Income"
      ? incomeCategories
      : type === "Expense"
      ? expenseCategories
      : [];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <>
      <div className="form">
        <h3>+ Add Transaction</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="typeOfTransaction">Type</label>
            <select
              id="typeOfTransaction"
              value={type}
              onChange={handleTypeChange}
            >
              <option value="" disabled>
                Select Type
              </option>
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              placeholder="0.00"
              type="number"
              onChange={handleAmountChange}
              value={amount}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            placeholder="Enter the description"
            onChange={handleDescriptionChange}
            value={description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Select Category
            </option>
            {availableCategories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <button id="btnAddTransaction" onClick={btnAddTransaction}>
          Add Transaction
        </button>
      </div>
    </>
  );
}
export default AddTransaction;
