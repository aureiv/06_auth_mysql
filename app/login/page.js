"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      window.location.href = "/dashboard";
    } else {
      setMessage(data.message); 
    }
  };

  return (
    <div className="auth-box">
      <span className="badge">Welcome back</span>
      <h1>Login</h1>
      <p className="subtitle">Sign in to open your dashboard.</p>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>

      {message && <p className="error">{message}</p>}
      <p className="link-line">
        No account yet? <Link href="/register">Register</Link>
      </p>
    </div>
  );
}