"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
//aws s3
const client_s3_1 = require("@aws-sdk/client-s3");
const appErrorServices_1 = __importDefault(require("../services/appErrorServices"));
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
if (!bucketName || !region || !accessKeyId || !secretAccessKey) {
    throw new appErrorServices_1.default("Missing AWS credentials. Check your environment variables.", 400);
}
const s3Client = new client_s3_1.S3Client({
    region,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
    },
});
exports.default = s3Client;
