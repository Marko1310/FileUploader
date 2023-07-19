"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
//file system
const fs_1 = __importDefault(require("fs"));
//aws s3
const s3_1 = __importDefault(require("aws-sdk/clients/s3"));
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
if (!bucketName || !region || !accessKeyId || !secretAccessKey) {
    throw new Error("Missing AWS credentials. Check your environment variables.");
}
const s3 = new s3_1.default({
    region,
    accessKeyId,
    secretAccessKey,
});
const uploadFileToAws = function (file) {
    const fileStream = fs_1.default.createReadStream(file.path);
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.originalname,
    };
    return s3.upload(uploadParams).promise();
};
exports.default = uploadFileToAws;
