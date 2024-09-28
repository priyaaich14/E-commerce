// const userModel = require("../../models/userModel")
// const bcrypt = require('bcryptjs');


// async function userSignUpController(req,res){
//     try{
//         const { email, password, name} = req.body

//         const user = await userModel.findOne({email})

//         console.log("user",user)

//         if(user){
//             throw new Error("Already user exits.")
//         }

//         if(!email){
//            throw new Error("Please provide email")
//         }
//         if(!password){
//             throw new Error("Please provide password")
//         }
//         if(!name){
//             throw new Error("Please provide name")
//         }

//         const salt = bcrypt.genSaltSync(10);
//         const hashPassword = await bcrypt.hashSync(password, salt);

//         if(!hashPassword){
//             throw new Error("Something is wrong")
//         }

//         const payload = {
//             ...req.body,
//             role : "GENERAL",
//             password : hashPassword
//         }

//         const userData = new userModel(payload)
//         const saveUser = await userData.save()

//         res.status(201).json({
//             data : saveUser,
//             success : true,
//             error : false,
//             message : "User created Successfully!"
//         })


//     }catch(err){
//         res.json({
//             message : err.message || err  ,
//             error : true,
//             success : false,
//         })
//     }
// }

// module.exports = userSignUpController

import bcrypt from 'bcryptjs';
import userModel from '../../models/userModel.js';

const userSignUpController = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      throw new Error('User already exists.');
    }

    if (!email) {
      throw new Error('Please provide an email.');
    }
    if (!password) {
      throw new Error('Please provide a password.');
    }
    if (!name) {
      throw new Error('Please provide a name.');
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (!hashPassword) {
      throw new Error('Something went wrong with password encryption.');
    }

    const payload = {
      ...req.body,
      role: 'GENERAL',
      password: hashPassword,
    };

    const userData = new userModel(payload);
    const saveUser = await userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: 'User created successfully!',
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

export default userSignUpController;
