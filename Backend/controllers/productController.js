const productModel = require('../models/productModel')



//Get Products API -api/v1/products
exports.getProduct = async(req, res) => {

  const products=await productModel.find({});

  res.json({ 
    success: true, 
    products 
  });
};


//Get Single Products API- api/v1/product/:id
exports.getSingleProduct = async(req, res, next ) => {
  console.log("id" ,req.params.id);
  try{
const product= await productModel.findById(req.params.id);
  res.json({ 
    success: true, 
    product });
  }
  catch(error)
  {
    res.status(404).json({
      success:false,
      message: error
    })
  }
  
};