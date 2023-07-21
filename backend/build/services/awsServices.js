"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_s3_1 = require("@aws-sdk/client-s3");
const awsS3_1 = __importDefault(require("../libs/awsS3"));
const appErrorServices_1 = __importDefault(require("../services/appErrorServices"));
const lib_storage_1 = require("@aws-sdk/lib-storage");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
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
    const uploader = new lib_storage_1.Upload({
        client: awsS3_1.default,
        params: uploadParams,
    });
    return await uploader.done();
};
const presignedUrl = async () => {
    console.log("HERE");
    const command = new client_s3_1.PutObjectCommand({
        Bucket: "mcabo",
        Key: "test.jpeg",
    });
    return (0, s3_request_presigner_1.getSignedUrl)(awsS3_1.default, command, {
        expiresIn: 6000,
    });
};
exports.default = { fileToAWS, presignedUrl };
