import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

export default function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, background: "#f4f6f8" }}>
        <TopBar />
        <div style={{ padding: "30px" }}>{children}</div>
      </div>
    </div>
  );
}
