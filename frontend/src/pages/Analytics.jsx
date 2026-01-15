import { useEffect, useState } from "react";
import API from "../services/api";
import MainLayout from "../layout/MainLayout";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Analytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/wallet/transactions").then((res) => {
      const formatted = res.data.map((t, i) => ({
        name: i + 1,
        amount: t.type.includes("OUT") || t.type === "WITHDRAW"
          ? -t.amount
          : t.amount,
      }));
      setData(formatted);
    });
  }, []);

  return (
    <MainLayout>
      <h1>Analytics</h1>

      <div className="page-card" style={{ height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </MainLayout>
  );
}
