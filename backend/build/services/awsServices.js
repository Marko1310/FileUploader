"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awsS3_1 = __importDefault(require("../libs/awsS3"));
const appErrorServices_1 = __importDefault(require("../services/appErrorServices"));
const bucketName = process.env.AWS_BUCKET_NAME;
if (!bucketName) {
    throw new appErrorServices_1.default("Missing AWS credentials. Check your environment variables.", 400);
}
const fileToAWS = async function (file) {
    const uploadParams = {
        Bucket: bucketName,
        Body: file.buffer,
        Key: file.originalname,
    };
    try {
        await awsS3_1.default.upload(uploadParams).promise();
    }
    catch (err) {
        throw new appErrorServices_1.default("Error uploading file to AWS", 400);
    }
};
exports.default = fileToAWS;
