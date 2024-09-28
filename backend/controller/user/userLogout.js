// async function userLogout(req,res){
//     try{
//         res.clearCookie("token")

//         res.json({
//             message : "Logged out successfully",
//             error : false,
//             success : true,
//             data : []
//         })
//     }catch(err){
//         res.json({
//             message : err.message || err  ,
//             error : true,
//             success : false,
//         })
//     }
// }


// module.exports = userLogout

const userLogout = async (req, res) => {
    try {
      res.clearCookie('token');
  
      res.json({
        message: 'Logged out successfully',
        error: false,
        success: true,
        data: [],
      });
    } catch (err) {
      res.json({
        message: err.message || err,
        error: true,
        success: false,
      });
    }
  };
  
  export default userLogout;
  