"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express router
const express_1 = require("express");
const router = (0, express_1.Router)();
//multer middleware
const multerMiddleware_1 = __importDefault(require("../middleware/multerMiddleware"));
// controller
const uploadController_1 = __importDefault(require("../controllers/uploadController"));
// Routes
// @route   POST /api/post
// @desc    Post a file
// @access  Public
router.post("/upload", multerMiddleware_1.default.upload.single("file"), uploadController_1.default.uploadFile);
exports.default = router;
