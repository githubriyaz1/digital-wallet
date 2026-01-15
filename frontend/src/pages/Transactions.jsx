import { useEffect, useState } from "react";
import API from "../services/api";
import MainLayout from "../layout/MainLayout";
import TransactionRow from "../components/TransactionRow";
import "../styles/dashboard.css";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    API.get("/wallet/transactions").then((res) =>
      setTransactions(res.data)
    );
  }, []);

  return (
    <MainLayout>
      <h1>Transactions</h1>

      <div className="page-card">
        <div className="table-head">
          <div>Type</div>
          <div>Amount</div>
          <div>Date</div>
        </div>

        {transactions.map((t, i) => (
          <TransactionRow key={i} t={t} />
        ))}
      </div>
    </MainLayout>
  );
}
