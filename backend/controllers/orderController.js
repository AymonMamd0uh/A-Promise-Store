const Order = require("../models/orderModel");

// Create Order
const createOrder = async (req, res) => {

  try {

    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
    } = req.body;

    if (orderItems.length === 0) {

      return res.status(400).json({
        message: "No order items",
      });

    }

    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      totalPrice,
    });

    const createdOrder =
      await order.save();

    res.status(201).json(createdOrder);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
// Get Logged In User Orders
const getMyOrders = async (req, res) => {

  try {

    const orders = await Order.find({
      user: req.user._id,
    });

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
// Get All Orders (Admin)
const getOrders = async (req, res) => {

  try {

    const orders = await Order.find({})
      .populate("user", "name email");

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
module.exports = {
  createOrder,
  getMyOrders,
  getOrders,
};