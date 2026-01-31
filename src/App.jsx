import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "T1", blocks: 1200000 },
  { name: "T2", blocks: 1210000 },
  { name: "T3", blocks: 1220000 },
  { name: "T4", blocks: 1230000 },
  { name: "T5", blocks: 1245789 },
];

function Card({ title, value }) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        width: "220px",
        background: "#fafafa",
      }}
    >
      <h3>{title}</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        {value ?? "Loading..."}
      </p>
    </div>
  );
}

function App() {
  const [block, setBlock] = useState(null);
  const [txCount, setTxCount] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setBlock(1245789);
      setTxCount(98234123);
    }, 1000);
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>QUAI Dashboard 🚀</h1>
      <p style={{ color: "gray", marginTop: "-10px" }}>
  Real-time blockchain insights powered by QUAI Scan APIs
</p>


      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <Card title="Latest Block" value={block} />
        <Card title="Total Transactions" value={txCount} />
        <Card title="Network Status" value="Online" />
      </div>

      <h2 style={{ marginTop: "50px" }}>Block Growth</h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="blocks"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
