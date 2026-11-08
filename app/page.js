import Link from "next/link";

// home page: student info and links to every page
export default function Home() {
  return (
    <div className="auth-box">
      <span className="badge">DIT205 · Assignment</span>
      <h1>Auth Demo</h1>
      <p className="subtitle">Membership system built with Next.js, MySQL and JWT.</p>

      <div className="profile">
        <div className="row"><span>First name</span><strong>Khin Hnin</strong></div>
        <div className="row"><span>Last name</span><strong>Aye</strong></div>
        <div className="row"><span>Student ID</span><strong>6808665</strong></div>
      </div>

      <div className="links">
        <Link href="/register" className="btn">Register</Link>
        <Link href="/login" className="btn btn-outline">Login</Link>
        <Link href="/dashboard" className="btn btn-outline">Dashboard (members only)</Link>
      </div>
    </div>
  );
}