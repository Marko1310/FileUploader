// Express router
import { Router } from "express";
const router = Router();

// controller
import getSignedUrl from "../controllers/signedUrlController";

//middleware
import multerMiddleware from "../middleware/multerMiddleware";

// Routes

// @route   GET /api/requestpresignedurl
// @desc    Get a presigned url
// @access  Public
router.get(
  "/requestpresignedurl",
  // multerMiddleware.attachFileToReq.single("file"),
  getSignedUrl
);

export default router;
