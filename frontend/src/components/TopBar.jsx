export default function TopBar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div
      style={{
        height: "60px",
        background: "#fff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 20px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      }}
    >
      <button onClick={logout}>Logout</button>
    </div>
  );
}
