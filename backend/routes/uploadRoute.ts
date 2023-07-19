// Express router
import { Router } from "express";
const router = Router();

// controller
import uploadController from "../controllers/uploadController";
import multerMiddleware from "../middleware/multerMiddleware";

// Routes

// @route   POST /api/post
// @desc    Post a file
// @access  Public
router.post(
  "/upload",
  multerMiddleware.single("file"),
  uploadController.uploadFile
);

export default router;
