import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Header03.css"

export default function Header03() {
  return (
    <header className="header">
  <h2>Welcome to Our Application</h2>
  <nav>
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/main" className="nav-link">Main</Link>
  </nav>
</header>

  )
}
