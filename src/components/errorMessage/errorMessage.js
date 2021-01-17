import React from "react";
import { Link } from "react-router-dom";
import "./errorMessage.css";

export default function ErrorMessage(error) {
  console.error(error);
  return (
    <div className="jumbotron-error-container">
      <div className="jumbotron error-jumbotron">
        <h1 className="display-4">An error has ocurred!</h1>
        <p className="lead">Something went wrong :/</p>
        <hr className="my-4" />
        <Link
          className="btn btn-danger btn-lg"
          to="/"
          role="button"
          rel="noreferrer"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
