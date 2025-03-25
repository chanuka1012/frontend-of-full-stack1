import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackgroundImage from '../BackgroundImage/BackGroundImage';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = () => {
    return formData.password.length < 6 ? 'Password must be at least 6 characters long.' : '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationMessage = validatePassword();
    if (validationMessage) {
      setMessage(validationMessage);
      return;
    }
    try {
      await axios.post('http://localhost:8081/api/users/register', formData);
      setMessage('Registration successful!');
      setFormData({ firstName: '', lastName: '', email: '', password: '' });
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      setMessage(error.response?.data || 'Error registering user. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="register-page">
      <Header />
      <div className="registration-container">
        <div className="box">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="register1">
              <label>First Name:</label>
              <input className="input1" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="register1">
              <label>Last Name:</label>
              <input className="input1" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="register1">
              <label>Email:</label>
              <input className="input1" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="register1">
              <label>Password:</label>
              <input className="input1" type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button className="buttonregister" type="submit">Register</button>
          </form>
          {message && <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>{message}</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
}
