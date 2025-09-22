//opimport { useState } from "react";
import "./App.css";

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
  
//   const [text, setText] = useState("");
//   const [transactions, setTransaction] = useState([]);
//   const addTransaction = () => {
//     if (text.trim() === "") {
//       alert("Please enter the task!");
//       return;
//     }
//     setTransaction([...transactions, { text }]); // store initial array +text
//     setText("");
//   };
//   return (
//     <>
//       <h1>Ledger</h1>
//       <input
//         style={{ padding: "10px", width: "300px" }}
//         placeholder="Add income & expense transactions"
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//         value={text} // This makes it a controlled component
//         //text state changes → value={text} updates the input display
//         //Without value={text}: The input would be "uncontrolled" - React wouldn't know what's in it
//       />
//       <button style={{ marginLeft: "20px" }} onClick={addTransaction}>
//         Add
//       </button>
//        <ul>
//          {transactions.map((transaction, index) => (
//            <li key={index}>{transaction.text}</li>
//          ))}
//        </ul>
//     </>
//   );
 }

export default App;
