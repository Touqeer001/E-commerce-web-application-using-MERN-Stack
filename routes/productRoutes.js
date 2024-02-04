import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import formidable from "express-formidable";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController } from "../Controllers/productController.js";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);



//get products
router.get("/get-product", getProductController);

//routes
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );
  
//single product
router.get("/get-product/:slug", getSingleProductController);


//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);
  
export default router;
