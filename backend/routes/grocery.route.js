import express from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems, 
  patchItem,
  updateItem,
} from "../controllers/grocery.controller.js";
import { todoLimiter } from "../config/rateLimits.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", todoLimiter, authMiddleware, createItem);
router.get("/", todoLimiter, authMiddleware, getItems);
router.get("/:id", getItem);
router.put("/:id", updateItem);
router.patch("/:id", patchItem);
router.delete("/:id", deleteItem);


export default router;