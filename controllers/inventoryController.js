import Inventory from "../model/inventory.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Inventory.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

export const getLowQuantityProducts = async (req, res) => {
  try {
    const products = await Inventory.find({ instock: { $lt: 100 } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching low quantity products" });
  }
};
