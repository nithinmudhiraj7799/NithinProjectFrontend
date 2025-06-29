import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx'; 
import Home from './components/home.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
