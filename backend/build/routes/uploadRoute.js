"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express router
const express_1 = require("express");
const router = (0, express_1.Router)();
// controller
const uploadController_1 = __importDefault(require("../controllers/uploadController"));
//middleware
const multerMiddleware_1 = __importDefault(require("../middleware/multerMiddleware"));
// Routes
// @route   POST /api/uploadtoserver
// @desc    Post a file to server
// @access  Public
router.post("/uploadtoserver", multerMiddleware_1.default.storeFileLocally.single("file"), uploadController_1.default.uploadFileToServer);
// @route   POST /api/uploadtoaws
// @desc    Post a file to aws
// @access  Public
router.post("/uploadtoaws", multerMiddleware_1.default.attachFileToReq.single("file"), uploadController_1.default.uploadFileToAWS);
exports.default = router;
