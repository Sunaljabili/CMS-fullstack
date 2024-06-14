import React from "react";
import AdminHeader from "../../components/Admin/Header";
import { Outlet } from "react-router-dom";

function AdminRoot() {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  );
}

export default AdminRoot;
