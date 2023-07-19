"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// aws S3
const awsS3_1 = __importDefault(require("../libs/awsS3"));
const uploadFileToServer = async (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." });
    }
    return res.status(201).json(req.file);
};
const uploadFileToAWS = async (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." });
    }
    const result = await (0, awsS3_1.default)(req.file);
    return res.status(201).json(req.file);
};
exports.default = { uploadFileToServer, uploadFileToAWS };
