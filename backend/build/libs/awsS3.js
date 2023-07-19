"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const uploadFile = function (file) {
    const uploadParams = {
        Bucket: bucketName,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
    };
    return s3.upload(uploadParams).promise();
};
exports.default = { uploadFile };
