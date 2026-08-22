import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="section-padding"
      style={{
        textAlign: "center",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "6rem",
            marginBottom: "1rem",
            color: "var(--accent)",
          }}
        >
          404
        </h1>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Page Not Found
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          style={{
            padding: "0.85rem 2rem",
            backgroundColor: "var(--text-primary)",
            color: "#fff",
            borderRadius: "100px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
