import express from "express";
import { getOrders } from "../controllers/orderController.js";
import { authenticateToken } from "../middleware/token.js";

const router = express.Router();

router.get("/", authenticateToken, getOrders);

export default router;
