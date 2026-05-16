const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = require("./config/db");

const Product = require("./models/Product");

const products = require("./data/products");

connectDB();

const importData = async () => {

  try {

    // Delete Old Products
    await Product.deleteMany();

    // Insert New Products
    await Product.insertMany(products);

    console.log("Products Imported");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

importData();