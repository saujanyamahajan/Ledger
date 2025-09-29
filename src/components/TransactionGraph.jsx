import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function TransactionGraph({ transactions }) {
  const COLORS = [
    "#A7AAE1",
    "#BBDCE5",
    "#F2AEBB",
    "#F5D3C4",
    "#FEE2AD",
    "#F8FAB4",
    "#E1E9C9",
  ];

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

  const expenseData = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, t) => {
      const existing = acc.find((item) => item.category === t.category);
      if (existing) {
        existing.amount = existing.amount + t.amount;
      } else {
        acc.push({ category: t.category, amount: t.amount });
      }
      return acc;
    }, []);
  return (
    <div className="form">
      <h3>Analytics</h3>
      {transactions.length === 0 ? (
        <p>No Transaction</p>
      ) : (
        <>
          <h4>Monthly Trend</h4>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={groupData}>
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="gray" />
            </BarChart>
          </ResponsiveContainer>
          <h4>Expense Category</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseData}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={120}
              >
                {expenseData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
}

export default TransactionGraph;
