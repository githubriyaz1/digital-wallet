export default function TransactionRow({ t }) {
  return (
    <div className="table-row">
      <div>{t.type}</div>
      <div className={t.type.includes("OUT") || t.type === "WITHDRAW" ? "neg" : "pos"}>
        ₹{t.amount}
      </div>
      <div>{new Date(t.createdAt).toLocaleDateString()}</div>
    </div>
  );
}
