// const mongoose = require('mongoose')

// const addToCart = mongoose.Schema({
//    productId : {
//         ref : 'product',
//         type : String,
//    },
//    quantity : Number,
//    userId : String,
// },{
//     timestamps : true
// })


// const addToCartModel = mongoose.model("addToCart",addToCart)

// module.exports = addToCartModel

import mongoose from 'mongoose';

const addToCartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId, // Using ObjectId for referencing another model
    ref: 'product',
  },
  quantity: Number,
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming userId is also an ObjectId referencing the user model
    ref: 'user',
  },
}, {
  timestamps: true,
});

const addToCartModel = mongoose.model('addToCart', addToCartSchema);

export default addToCartModel;
