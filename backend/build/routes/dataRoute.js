"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express router
const express_1 = require("express");
const router = (0, express_1.Router)();
// controller
const retrieveDataController_1 = __importDefault(require("../controllers/retrieveDataController"));
// middleware
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const publicMiddleware_1 = __importDefault(require("../middleware/publicMiddleware"));
// Routes
// @route   GET /api/auth/users
// @desc    Get all users
// @access  Private
// @role    Admin, Blogger, User
router.get('/auth/users', authMiddleware_1.default.requireAuth, retrieveDataController_1.default.getAllUsers);
// @route   GET /api/auth/post-request
// @desc    Get requested posts (not allowed posts)
// @access  Private
// @role    Admin
router.get('/auth/post-request', authMiddleware_1.default.requireAuth, authMiddleware_1.default.restrictTo('admin'), retrieveDataController_1.default.getRequestedPosts);
// @route   GET /api/posts
// @desc    Get posts depending on roles
// @access  Public/Private
// @role    Admin/Blogger/User/Unauthenticated
router.get('/auth/posts', publicMiddleware_1.default.allowPublicAccess, authMiddleware_1.default.requireAuth, authMiddleware_1.default.restrictTo('admin', 'blogger'), retrieveDataController_1.default.getPosts);
exports.default = router;
