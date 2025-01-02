import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post('http://localhost:5500/api/user/signup', formData)
  //     .then((res) => {
  //       setMessage(res.data.message);
  //       setFormData({
  //         email: '',
  //         password: '',
  //         firstname: '',
  //         lastname: ''
  //       });
  //     })
  //     .catch((err) => {
  //       setMessage(err.response?.data?.message || 'Error signing up');
  //     });
  // };
const handleSubmit = (e) => {
  e.preventDefault();

  // Use different API URLs based on the environment (development vs. production)
  const apiUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://meshoo-mern-1.onrender.com/api/user/signup'
      : 'http://localhost:5500/api/user/signup';

  axios
    .post(apiUrl, formData)
    .then((res) => {
      setMessage(res.data.message);  // Display the success message
      setFormData({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
      });  // Reset form data after successful signup
    })
    .catch((err) => {
      setMessage(err.response?.data?.message || 'Error signing up');  // Display error message
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
        <button type="submit">Sign Up</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Signup;
