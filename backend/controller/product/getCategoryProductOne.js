// const productModel = require("../../models/productModel")


// const getCategoryProduct = async(req,res)=>{
//     try{
//         const productCategory = await productModel.distinct("category")

//         console.log("category",productCategory)

//         //array to store one product from each category
//         const productByCategory = []

//         for(const category of productCategory){
//             const product = await productModel.findOne({category })

//             if(product){
//                 productByCategory.push(product)
//             }
//         }


//         res.json({
//             message : "category product",
//             data : productByCategory,
//             success : true,
//             error : false
//         })


//     }catch(err){
//         res.status(400).json({
//             message : err.message || err,
//             error : true,
//             success : false
//         })
//     }
// }

// module.exports = getCategoryProduct


import productModel from '../../models/productModel';

const getCategoryProduct = async (req, res) => {
  try {
    // Get a list of distinct product categories
    const productCategory = await productModel.distinct('category');
    console.log('category', productCategory);

    // Array to store one product from each category
    const productByCategory = [];

    // Fetch one product from each category
    for (const category of productCategory) {
      const product = await productModel.findOne({ category });

      if (product) {
        productByCategory.push(product);
      }
    }

    // Send response
    res.json({
      message: 'Category products fetched successfully',
      data: productByCategory,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

export default getCategoryProduct;
