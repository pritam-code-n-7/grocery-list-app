import express from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  patchItem,
  updateItem,
} from "../controllers/grocery.controller.js";

const router = express.Router();

router.post("/", createItem);
router.get("/", getItems);
router.get("/:id", getItem);
router.put("/:id", updateItem);
router.patch("/:id", patchItem);
router.delete("/:id", deleteItem);


export default router;