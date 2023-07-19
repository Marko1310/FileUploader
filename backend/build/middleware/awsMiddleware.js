"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awsS3_1 = __importDefault(require("../libs/awsS3"));
const uploadFileToAWS = function (file) {
    const fileStream = fs.createReadStream(file.path);
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.originalname,
    };
    return awsS3_1.default.upload(uploadParams).promise();
};
exports.default = uploadFileToAWS;
