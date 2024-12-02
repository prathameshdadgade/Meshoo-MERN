const express = require('express');
const router = express.Router();
const Controller = require('../Controller/userController');

// Signup Route
router.post('/signup', Controller.signup);

// Login Route
router.post('/login', Controller.login);

module.exports = router; // This exports the router correctly
