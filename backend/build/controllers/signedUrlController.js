"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awsS3_1 = __importDefault(require("../libs/awsS3"));
const getSignedUrl = async (req, res, next) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: process.env.AWS_SECRET_KEY,
        Expires: 60 * 5,
    };
    try {
        const presignedUrl = awsS3_1.default.getSignedUrl("getObject", params);
        res.json({ url: presignedUrl });
    }
    catch (err) {
        if (err) {
            return next(err);
        }
    }
};
exports.default = getSignedUrl;
