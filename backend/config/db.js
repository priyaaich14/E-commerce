// const mongoose = require("mongoose")


// async function connectDB(){
//     try{
//         await mongoose.connect(process.env.MONGODB_URI)
//     }catch(err){
//         console.log(err)
//     }
// }

// module.exports = connectDB

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

export default connectDB;
