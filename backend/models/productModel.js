// const mongoose = require('mongoose')

// const productSchema = mongoose.Schema({
//     productName : String,
//     brandName : String,
//     category : String,
//     productImage : [],
//     description : String,
//     price : Number,
//     sellingPrice : Number
// },{
//     timestamps : true
// })


// const productModel = mongoose.model("product",productSchema)

// module.exports = productModel

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productName: String,
  brandName: String,
  category: String,
  productImage: [String],  // Assuming productImage is an array of image URLs
  description: String,
  price: Number,
  sellingPrice: Number,
}, {
  timestamps: true,
});

const productModel = mongoose.model('product', productSchema);

export default productModel;
