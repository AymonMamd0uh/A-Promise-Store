const express = require("express");

const {
  createOrder,
  getMyOrders,
  getOrders,
} = require("../controllers/orderController");

const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Create Order
router.post("/", protect, createOrder);

router.get("/myorders", protect, getMyOrders);
router.get("/", protect, admin, getOrders);
module.exports = router;