import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    try {
      const res = await axios.post('https://nithinprojectbackend.onrender.com/api/auth/login', formData);
      setMessage(res.data.message);
      setMessageType('success');

      localStorage.setItem('token', res.data.token);

      setTimeout(() => navigate('/home'), 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed');
      setMessageType('error');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && (
        <p className={`auth-message ${messageType}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Login;
