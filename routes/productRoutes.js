import express from "express";
import {
  // brainTreePaymentController,
  // braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// Routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Get products
router.get("/get-product", getProductController);

// Single product
router.get("/get-product/:slug", getSingleProductController);

// Get photo
router.get("/product-photo/:pid", productPhotoController);

// Delete product
router.delete("/delete-product/:pid", deleteProductController);

// Filter product
router.post("/product-filters", productFiltersController);

// Product count
router.get("/product-count", productCountController);

// Product per page
router.get("/product-list/:page", productListController);

// Search product
router.get("/search/:keyword", searchProductController);

// Similar product
router.get("/related-product/:pid/:cid", relatedProductController);

// Category wise product
router.get("/product-category/:slug", productCategoryController);

// Payments routes (Commented out as Braintree is not used)
// Token
// router.get("/braintree/token", braintreeTokenController);

// Payments
// router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
