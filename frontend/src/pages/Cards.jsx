import MainLayout from "../layout/MainLayout";
import "../styles/dashboard.css";

export default function Cards() {
  return (
    <MainLayout>
      <h1>My Cards</h1>

      <div className="card-ui">
        <div className="card-chip"></div>
        <h3>MYBANK</h3>
        <p>**** **** **** 1234</p>
        <span>VALID 12/29</span>
      </div>
    </MainLayout>
  );
}
