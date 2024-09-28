// const userModel = require("../models/userModel")

// const uploadProductPermission = async(userId) => {
//     const user = await userModel.findById(userId)

//     if(user.role === 'ADMIN'){
//         return true
//     }

//     return false
// }


// module.exports = uploadProductPermission

import userModel from '../models/userModel';

const uploadProductPermission = async (userId) => {
  const user = await userModel.findById(userId);

  return user?.role === 'ADMIN';
};

export default uploadProductPermission;
