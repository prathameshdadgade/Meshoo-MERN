const express = require('express');
const mongoose = require('mongoose');
const Router = require('./Routers/index'); // Correctly imported Router
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
// Use main router
app.use('/api', Router);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Prathamesh', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));



// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
