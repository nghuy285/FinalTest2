import mongoose from "mongoose";
import dotenv from "dotenv";
import Order from "./model/order.js";
import Inventory from "./model/inventory.js";
import User from "./model/user.js";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await connectDB();

    const orders = [
      { item: "almonds", price: 12, quantity: 2 },
      { item: "pecans", price: 20, quantity: 1 },
      { item: "pecans", price: 20, quantity: 3 },
    ];

    const inventory = [
      { sku: "almonds", description: "product 1", instock: 120 },
      { sku: "bread", description: "product 2", instock: 80 },
      { sku: "cashews", description: "product 3", instock: 60 },
      { sku: "pecans", description: "product 4", instock: 70 },
    ];

    const users = [
      { username: "admin", password: "MindX@2022" },
      { username: "alice", password: "MindX@2022" },
    ];

    await Order.deleteMany();
    await Inventory.deleteMany();
    await User.deleteMany();

    await Order.insertMany(orders);
    await Inventory.insertMany(inventory);
    await User.insertMany(users);

    console.log("Data imported successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
