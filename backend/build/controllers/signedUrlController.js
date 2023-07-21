"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Services
const awsServices_1 = __importDefault(require("../services/awsServices"));
const getSignedUrl = async (req, res, next) => {
    try {
        // if (!req.file) {
        //   throw new AppError("No file uploaded to server.", 400);
        // }
        const presignedUrl = await awsServices_1.default.presignedUrl();
        res.json({ urll: presignedUrl });
    }
    catch (err) {
        return next(err);
    }
};
exports.default = getSignedUrl;
