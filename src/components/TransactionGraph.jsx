import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function TransactionGraph({ transactions }) {
  return (
    <div className="form">
      <h3>Analytics</h3>
      {transactions.length === 0 ? (
        <p>No Transaction</p>
      ) : (
        <BarChart width={500} height={300} data={transactions}>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="gray" />
        </BarChart>
      )}
    </div>
  );
}

export default TransactionGraph;
