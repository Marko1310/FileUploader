"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    status;
    statusCode;
    isOperational;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'eror';
        this.isOperational = true;
    }
}
exports.default = AppError;
