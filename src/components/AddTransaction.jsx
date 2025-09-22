import { useState } from "react";
import "./AddTransaction.css";
function AddTransaction({onAdd}) {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const btnAddTransaction = () => {
    if (!type || !amount || !description || !category) return;
     onAdd({ type, amount: Number(amount), description, category });
    setType("");
    setAmount("");
    setDescription("");
    setCategory("");
  };
  return (
    <>
      <h3>+ Add Transaction</h3>
      <div className="form-container">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="typeOfTransaction">Type</label>
            <select
              id="typeOfTransaction"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
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
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={amount}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            placeholder="Enter the description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option>Salary</option>
            <option>Freelance</option>
            <option>Investment</option>
            <option>Gift</option>
            <option>Other</option>
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
