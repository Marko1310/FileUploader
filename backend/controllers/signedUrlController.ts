import { Request, Response, NextFunction } from "express";

// Services
import awsServices from "../services/awsServices";
import AppError from "../services/appErrorServices";

const getSignedUrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // if (!req.file) {
    //   throw new AppError("No file uploaded to server.", 400);
    // }
    const presignedUrl = await awsServices.presignedUrl();
    res.json({ urll: presignedUrl });
  } catch (err) {
    return next(err);
  }
};

export default getSignedUrl;
