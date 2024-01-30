import express from "express";
// import { Router } from "express";
import { TodoController } from "../Controllers/todoController.js";

const router = express.Router();
router.get('/',TodoController.getAllTasks);
router.post('/',TodoController.createTask);
router.put('/:id',TodoController.updateTask);
router.put('/toggleComplete/:id',TodoController.toggleComplete);
router.delete('/:id',TodoController.deleteTask);

export default router;