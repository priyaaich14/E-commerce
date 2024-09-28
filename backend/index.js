// const express = require('express')
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// require('dotenv').config()
// const connectDB = require('./config/db')
// const router = require('./routes')


// const app = express()
// app.use(cors({
//     origin : process.env.FRONTEND_URL,
//     credentials : true
// }))
// app.use(express.json())
// app.use(cookieParser())

// app.use("/api",router)

// const PORT = 8080 || process.env.PORT


// connectDB().then(()=>{
//     app.listen(PORT,()=>{
//         console.log("connnect to DB")
//         console.log("Server is running "+PORT)
//     })
// })



import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/index.js';  // Assuming routes has an index.js file

dotenv.config();

const app = express();

// Middleware setup
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// API routes
app.use('/api', router);

const PORT = process.env.PORT || 8080;

// Connect to database and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Connected to DB');
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to connect to DB', error);
});
