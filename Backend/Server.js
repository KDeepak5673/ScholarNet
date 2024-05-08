import authroute from './routes/auth.js';
import studentroute from './routes/students.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";


// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: "http://localhost:3000", methods: ["POST" , "GET"] ,credentials: true }));


// Routes
app.use('/api/auth', authroute);
app.use('/api/students', studentroute);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

// Start the server
const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  connect();
  console.log("Backend server is running!");
  console.log(`Server running on port ${PORT}`)
});
