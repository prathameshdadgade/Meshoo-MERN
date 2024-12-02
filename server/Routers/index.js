const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const controllers = require('../Controller/index');

router.get('/search', controllers.getSearchResults);
router.use('/user', userRoutes);

module.exports = router;
