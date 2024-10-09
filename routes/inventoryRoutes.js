import express from "express";
import {
  getAllProducts,
  getLowQuantityProducts,
} from "../controllers/inventoryController.js";
import { authenticateToken } from "../middleware/token.js";

const router = express.Router();

router.get("/", authenticateToken, getAllProducts);
router.get("/low-quantity", authenticateToken, getLowQuantityProducts);

export default router;
