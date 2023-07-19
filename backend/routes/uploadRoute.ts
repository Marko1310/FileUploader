// Express router
import { Router } from "express";
const router = Router();

//multer middleware
import multerMiddleware from "../middleware/multerMiddleware";

// controller
import uploadController from "../controllers/uploadController";

// Routes

// @route   POST /api/post
// @desc    Post a file
// @access  Public
router.post(
  "/upload",
  multerMiddleware.upload.single("file"),
  uploadController.uploadFile
);

export default router;
