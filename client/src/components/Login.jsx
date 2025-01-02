import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email' && value && !/^\S+@\S+\.\S+$/.test(value)) {
      setMessage('Invalid email format');
    } else {
      setMessage('');
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post('https://meshoo-mern-1.onrender.com/api/user/login', formData)
      .then((res) => {
        const { user } = res.data;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(user));
        setMessage('Login successful!');
        navigate('/');
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          setMessage('Invalid email or password');
        } else {
          setMessage(err.response?.data?.message || 'Error logging in');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
