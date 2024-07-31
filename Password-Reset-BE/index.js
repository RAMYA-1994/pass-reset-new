import express from 'express';
import dotenv from 'dotenv';
import AppRouter from './src/routes/index.js';
import cors from 'cors';
import mongoose from 'mongoose';

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.dbUrl;

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', AppRouter);

// Connect to MongoDB
// mongoose
//   .connect("mongodb+srv://user1:ramyapraba@cluster0.bnxxvoh.mongodb.net/?retryWrites=true&w=majority&appName=password", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Database Connected...');
//   })
//   .catch((error) => {
//     console.error('NOT CONNECTED! Error:', error.message);
//   });

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
