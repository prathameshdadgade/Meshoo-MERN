require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const Router = require('./Routers/index'); // Correctly imported Router
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const MONGODB_URI =process.env.MONGODB_URI || mongodb://localhost:27017/Prathamesh;
const MONGODB_URI =process.env.MONGODB_URI || "mongodb+srv://prathameshdagade:Prash@123@cluster0.jdpbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Use main router
app.use('/api', Router);

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Start the server using the PORT from environment variable
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
