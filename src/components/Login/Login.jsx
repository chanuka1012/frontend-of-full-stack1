import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import BackgroundImage from '../BackgroundImage/BackGroundImage';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const [errorMessage, setErrorMessage] = useState('');
      const [successMessage, setSuccessMessage] = useState('');
      
      // Inside Login component
        const navigate = useNavigate();

    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8081/api/users/login', formData);
          console.log(response.data['userId']);
          localStorage.setItem("userId",response.data['userId']);
          const data = response.data;
          setSuccessMessage(response.data); // "Login successful"
          
          console.log('User authenticated');
          navigate('/main'); // Navigate to Expense Page on successful login
        } catch (error) {
          setErrorMessage(error.response?.data || 'Invalid credentials.');
        }
      };
      //localStorage.getItem("userId");

  return (
    <div>
      <Header />

      <div className="login-container">
  <div className="box">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className='login1'>
        <label>Email:</label>
        <input className='login_input' type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className='login1'>
        <label>Password:</label>
        <input className='login_input' type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      {errorMessage && <div className="message error">{errorMessage}</div>}
      {successMessage && <div className="message success">{successMessage}</div>}
      <button type="submit" className="login-button">Login</button>
    </form>
  </div>
</div>

    <Footer />
    </div>
   
  );
}
