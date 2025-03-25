import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Add styling for header and footer here
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackgroundImage from '../BackgroundImage/BackGroundImage';

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="box1">
          <main className="main-content">
            <h1>Home</h1>
            <p>Welcome to the home page of our application.</p>
            <div className="button-container">
              <Link to="/Register" className="home-button register-button">Go to the Register Page</Link>
              <Link to="/Login" className="home-button login-button">Go to the Login Page</Link>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

