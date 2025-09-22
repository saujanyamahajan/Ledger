import "./AddTransaction.css";

function AddTransaction() {
  return (
    <>
      <h3>+ Add Transaction</h3>
      <div className="form-container">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="typeOfTransaction">Type</label>
            <select id="typeOfTransaction">
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input id="amount" placeholder="0.00" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input id="description" placeholder="Enter the description" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category">
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
        <button id="btnAddTransaction">Add Transaction</button>
      </div>
    </>
  );
}
export default AddTransaction;
