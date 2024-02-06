import "./admin.css";
import AdminMain from "./components/AdminMain";
import AdminSidebar from "./components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <section className="admin-dashboard">
      <AdminSidebar />
      <AdminMain />
    </section>
  );
};

export default AdminDashboard;
