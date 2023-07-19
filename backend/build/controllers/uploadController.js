"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// services
const awsServices_1 = __importDefault(require("../services/awsServices"));
const appErrorServices_1 = __importDefault(require("../services/appErrorServices"));
const uploadFileToServer = async (req, res, next) => {
    try {
        if (!req.file) {
            throw new appErrorServices_1.default("No file uploaded to server.", 400);
        }
        return res
            .status(201)
            .json(`File ${req.file.originalname} has been succesfully uploaded to the server`);
    }
    catch (err) {
        return next(err);
    }
};
const uploadFileToAWS = async (req, res, next) => {
    try {
        if (!req.file) {
            throw new appErrorServices_1.default("No file uploaded to AWS.", 400);
        }
        await (0, awsServices_1.default)(req.file);
        return res
            .status(201)
            .json(`File ${req.file.originalname} has been succesfully uploaded to AWS`);
    }
    catch (err) {
        return next(err);
    }
};
exports.default = { uploadFileToServer, uploadFileToAWS };
