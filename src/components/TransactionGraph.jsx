import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TransactionGraph({ transactions }) {
  const groupData = transactions.reduce(
    (acc, t) => {
      if (t.type === "Income") {
        acc[0].amount = acc[0].amount + t.amount;
      } else if (t.type === "Expense") {
        acc[1].amount = acc[1].amount + t.amount;
      }
      return acc;
    },
    [
      { type: "Income", amount: 0 },
      { type: "Expense", amount: 0 },
    ]
  );
  return (
    <div className="form">
      <h3>Analytics</h3>
      {transactions.length === 0 ? (
        <p>No Transaction</p>
      ) : (
        <>
        <ResponsiveContainer className="graphContainer" width="100%" height={300}>
          <BarChart data={groupData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="gray" />
          </BarChart>
        </ResponsiveContainer>
        </>
      )}

      
    </div>

    
  );
}

export default TransactionGraph;
