"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    if (err instanceof multer_1.default.MulterError) {
        return res.status(400).json({ error: "Multer Error: " + err.message });
    }
    res.status(err.statusCode).json({
        message: err.message,
    });
};
exports.default = globalErrorHandler;
