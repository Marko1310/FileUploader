// Express Router
import { Request, Response, NextFunction } from "express";

// services
import awsServices from "../services/awsServices";
import AppError from "../services/appErrorServices";

const uploadFileToServer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      throw new AppError("No file uploaded to server.", 400);
    }
    return res
      .status(201)
      .json(
        `File ${req.file.originalname} has been succesfully uploaded to the server`
      );
  } catch (err) {
    return next(err);
  }
};

const uploadFileToAWS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      throw new AppError("No file uploaded to AWS.", 400);
    }
    await awsServices.fileToAWS(req.file);
    return res
      .status(201)
      .json(
        `File ${req.file.originalname} has been succesfully uploaded to AWS`
      );
  } catch (err) {
    return next(err);
  }
};

export default { uploadFileToServer, uploadFileToAWS };
