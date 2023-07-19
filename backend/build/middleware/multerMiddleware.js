"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
        const filename = file.originalname;
        cb(null, filename);
    },
});
const storeFileLocally = (0, multer_1.default)({ storage });
const attachFileToReq = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
exports.default = { storeFileLocally, attachFileToReq };
