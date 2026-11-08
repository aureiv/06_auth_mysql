"use client";

import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/me")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login";
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="auth-box">
      <div className="avatar">{user.fullname?.charAt(0).toUpperCase()}</div>
      <span className="badge">Members area</span>
      <h1>Dashboard</h1>
      <p className="subtitle">You are logged in.</p>

      <p className="info-line">Welcome, <strong>{user.fullname}</strong></p>
      <p className="info-line">Email: <strong>{user.email}</strong></p>

      <form onSubmit={(event) => event.preventDefault()}>
        <button type="button" onClick={handleLogout}>Logout</button>
      </form>
    </div>
  );
}