// Express router
import { Router } from "express";
const router = Router();

// controller
import getSignedUrl from "../controllers/signedUrlController";

// Routes

// @route   GET /api/requestpresignedurl
// @desc    Get a presigned url
// @access  Public
router.get("/requestpresignedurl", getSignedUrl);

export default router;
