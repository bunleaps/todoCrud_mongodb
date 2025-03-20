import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todoList.js";

const router = express.Router();

router.get("/all", getAllTodos);
router.post("/create", createTodo);
router.patch("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

export default router;
