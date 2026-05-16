const express = require("express");

const {
  getProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

// Get Products
router.get("/", getProducts);

// Get Single Product
router.get("/:id", getSingleProduct);

// Create Product
router.post("/", createProduct);

// Delete Product
router.delete("/:id", deleteProduct);

// Update Product
router.put("/:id", updateProduct);

module.exports = router;