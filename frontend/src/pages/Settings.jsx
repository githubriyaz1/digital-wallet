import MainLayout from "../layout/MainLayout";
import "../styles/dashboard.css";

export default function Settings() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <MainLayout>
      <h1>Settings</h1>

      {/* Profile Section */}
      <div className="page-card">
        <h3>Profile</h3>
        <p><strong>Name:</strong> User</p>
        <p><strong>Email:</strong> Logged-in account</p>
        <p><strong>Status:</strong> Active</p>
      </div>

      {/* Security Section */}
      <div className="page-card">
        <h3>Security</h3>
        <button className="danger-btn" onClick={logout}>
          Logout from all sessions
        </button>
      </div>

      {/* Account Section */}
      <div className="page-card danger-zone">
        <h3>Danger Zone</h3>
        <p>This action is irreversible.</p>
        <button className="danger-btn">Deactivate Account</button>
      </div>
    </MainLayout>
  );
}
