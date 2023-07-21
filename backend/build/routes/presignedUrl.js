"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express router
const express_1 = require("express");
const router = (0, express_1.Router)();
// controller
const signedUrlController_1 = __importDefault(require("../controllers/signedUrlController"));
// Routes
// @route   GET /api/requestpresignedurl
// @desc    Get a presigned url
// @access  Public
router.get("/requestpresignedurl", 
// multerMiddleware.attachFileToReq.single("file"),
signedUrlController_1.default);
exports.default = router;
