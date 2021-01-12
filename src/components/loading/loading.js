import React from "react";
import "./loading.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Loading() {
  return (
    <div className="card loading-card">
      <div
        className="spinner-border text-danger loading-circle"
        role="status"
      />
      <h1 className="loading-text">Loading...</h1>
    </div>
  );
}
