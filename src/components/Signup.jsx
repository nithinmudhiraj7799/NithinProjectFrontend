
import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsSuccess(false);

    try {
     const res = await axios.post('https://nithinprojectbackend.onrender.com/api/auth/signup', formData, {
  withCredentials: true,
});

      setMessage(res.data.message);
      setIsSuccess(true);
      alert(res.data.message); 
      alert(res.data.message);  

      setFormData({ name: '', email: '', password: '' });

      navigate('/login');
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Signup failed';
      setMessage(errorMsg);
      alert(errorMsg); 
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
      {message && <p className={`auth-message ${isSuccess ? 'success' : ''}`}>{message}</p>}
    </div>
  );
};

export default Signup;
