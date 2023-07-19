// Express router
import { Router } from "express";
const router = Router();

// controller
import uploadController from "../controllers/uploadController";

//middleware
import multerMiddleware from "../middleware/multerMiddleware";

// Routes

// @route   POST /api/uploadtoserver
// @desc    Post a file to server
// @access  Public
router.post(
  "/uploadtoserver",
  multerMiddleware.storeFileLocally.single("file"),
  uploadController.uploadFileToServer
);

// @route   POST /api/uploadtoaws
// @desc    Post a file to aws
// @access  Public
router.post(
  "/uploadtoaws",
  multerMiddleware.attachFileToReq.single("file"),
  uploadController.uploadFileToAWS
);

export default router;
