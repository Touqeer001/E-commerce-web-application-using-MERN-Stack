import express from "express";
import { createCategoryController } from "../Controllers/CategoryController.js";
import firebaseAuthMiddleware from "../middleware/Authmidleware.cjs";
const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  firebaseAuthMiddleware,
  createCategoryController
);

export default router;
