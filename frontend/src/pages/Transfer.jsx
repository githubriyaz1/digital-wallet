import { useState } from "react";
import API from "../services/api";
import MainLayout from "../layout/MainLayout";
import "../styles/dashboard.css";

export default function Transfer() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const transfer = async () => {
    try {
      await API.post("/wallet/transfer", {
        email,
        amount: Number(amount),
      });
      alert("Transfer successful");
    } catch (err) {
      alert(err.response?.data?.message || "Transfer failed");
    }
  };

  return (
    <MainLayout>
      <h1>Transfer Money</h1>

      <div className="page-card" style={{ maxWidth: "400px" }}>
        <label>Receiver Email</label>
        <input
          placeholder="receiver@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Amount</label>
        <input
          placeholder="₹ Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={transfer}>Send Money</button>
      </div>
    </MainLayout>
  );
}
