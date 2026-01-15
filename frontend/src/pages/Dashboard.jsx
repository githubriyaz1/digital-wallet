import { useEffect, useState } from "react";
import API from "../services/api";
import MainLayout from "../layout/MainLayout";
import StatCard from "../components/StatCard";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/";
    loadData();
  }, []);

  const loadData = async () => {
    const tx = await API.get("/wallet/transactions");
    setTransactions(tx.data);

    let total = 0;
    tx.data.forEach((t) => {
      if (t.type.includes("DEPOSIT") || t.type.includes("IN")) total += t.amount;
      else total -= t.amount;
    });
    setBalance(total);
  };

  return (
    <MainLayout>
      <h1>Dashboard</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
        <StatCard title="Current Balance" value={`₹${balance}`} />
        <StatCard title="Transactions" value={transactions.length} />
        <StatCard title="Status" value="Active" />
      </div>
    </MainLayout>
  );
}
