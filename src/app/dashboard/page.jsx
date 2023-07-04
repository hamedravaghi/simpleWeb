"use client";
import { useContext } from "react";
import { AuthContext } from "@_context/AuthProvider";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <button onClick={logout}>خروج</button>
    </div>
  );
};

export default Dashboard;
