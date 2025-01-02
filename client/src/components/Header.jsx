import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email' && value && !/^\S+@\S+\.\S+$/.test(value)) {
      setMessage('Invalid email format');
    } else if (name === 'password' && value && value.length < 6) {
      setMessage('Password must be at least 6 characters');
    } else {
      setMessage('');
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post('https://meshoo-mern-1.onrender.com/api/user/signup', formData)
      .then((res) => {
        setMessage('Signup successful! Redirecting to login...');
        setFormData({
          email: '',
          password: '',
          firstname: '',
          lastname: ''
        });
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch((err) => {
        setMessage(err.response?.data?.message || 'Error signing up');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Signup;
