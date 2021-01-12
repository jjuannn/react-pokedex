import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./buttons.css";
export default function Buttons({ text, onClick, disabled }) {
  return (
    <button
      className="btn btn-danger single-button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}{" "}
      {text === "Next page" ? (
        <i className="fas fa-arrow-right"></i>
      ) : (
        <i className="fas fa-arrow-left"></i>
      )}
    </button>
  );
}
