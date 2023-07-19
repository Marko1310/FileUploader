"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uploadFile = async (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." });
    }
    return res.status(201).json(req.file);
};
exports.default = { uploadFile };
