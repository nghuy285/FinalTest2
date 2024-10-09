import Order from "../model/order.js";
import Inventory from "../model/inventory.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    const productDetails = await Inventory.find();

    const ordersWithDescriptions = orders.map((order) => {
      const product = productDetails.find((item) => item.sku === order.item);
      return {
        ...order._doc,
        description: product ? product.description : "No description found",
      };
    });

    res.json(ordersWithDescriptions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};
