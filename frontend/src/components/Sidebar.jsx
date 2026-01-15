import { Link } from "react-router-dom";

const linkStyle = {
  display: "block",
  padding: "12px 20px",
  color: "#fff",
  textDecoration: "none",
};

export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#1f2937",
        color: "#fff",
      }}
    >
      <h2 style={{ padding: "20px" }}>MyBank</h2>

      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      <Link to="/settings" style={linkStyle}>Settings</Link>
      <Link to="/transactions" style={linkStyle}>Transactions</Link>
      <Link to="/transfer" style={linkStyle}>Transfer</Link>
      <Link to="/cards" style={linkStyle}>Cards</Link>
      <Link to="/settings" style={linkStyle}>Settings</Link>
    </div>
  );
}
