"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uploadFile = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded." });
        }
        res.status(200).json(req.file);
    }
    catch (err) {
        return next(err);
    }
};
exports.default = { uploadFile };
