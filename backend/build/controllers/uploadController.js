"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uploadFile = async (req, res, next) => {
    try {
        res.status(200).json(req.file);
    }
    catch (err) {
        return next(err);
    }
};
exports.default = { uploadFile };
