import { Request, Response, NextFunction } from "express";
import multer from "multer";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;

  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: "Multer Error: " + err.message });
  }

  res.status(err.statusCode).json({
    message: err.message,
  });
};

export default globalErrorHandler;
