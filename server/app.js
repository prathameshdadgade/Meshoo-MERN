require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const Router = require('./Routers/index'); // Correctly imported Router
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// MongoDB URI (ensure your MongoDB URI is correct in .env file or replace it directly)
const MONGODB_URI = process.env.MONGODB_URI ||"mongodb+srv://prathameshdagade:Prash123@cluster0.jdpbd.mongodb.net/Prathamesh?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(bodyParser.json());

// Enable CORS for your frontend domain
const corsOptions = {
  origin: 'https://meshho.netlify.app', // Allow your Netlify domain
  methods: 'GET, POST', // Allowed HTTP methods
  allowedHeaders: 'Content-Type, Authorization', // Allowed headers
};
app.use(cors(corsOptions));

// Use the main router for handling API routes
app.use('/api', Router);

// Connect to MongoDB using the environment variable
mongoose.connect(MONGODB_URI)
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
