const Product = require("../models/Product");

// Get All Products
const getProducts = async (req, res) => {

  try {

    const products = await Product.find();

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
// Get Single Product
const getSingleProduct = async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
// Create Product
const createProduct = async (req, res) => {

  try {

    const {
      name,
      image,
      description,
      price,
      category,
      countInStock,
    } = req.body;

    const product = await Product.create({
      name,
      image,
      description,
      price,
      category,
      countInStock,
    });

    res.status(201).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
// Delete Product
const deleteProduct = async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    );

    if (!product) {

      return res.status(404).json({
        message: "Product not found",
      });

    }

    await product.deleteOne();

    res.status(200).json({
      message: "Product deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
// Update Product
const updateProduct = async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    );

    if (!product) {

      return res.status(404).json({
        message: "Product not found",
      });

    }

    product.name =
      req.body.name || product.name;

    product.image =
      req.body.image || product.image;

    product.description =
      req.body.description || product.description;

    product.price =
      req.body.price || product.price;

    product.category =
      req.body.category || product.category;

    product.countInStock =
      req.body.countInStock || product.countInStock;

    const updatedProduct =
      await product.save();

    res.status(200).json(updatedProduct);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
