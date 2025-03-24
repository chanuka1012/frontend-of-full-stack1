import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h2>Money Manager</h2>
        <nav>
          <Link to="/" className="header-link">Home</Link>
          <Link to="/Register" className="header-link">Register</Link>
          <Link to="/Login" className="header-link">Login</Link>
        </nav>
      </div>
    </header>
  );
}

