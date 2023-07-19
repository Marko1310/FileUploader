// Express Router
import { Request, Response, NextFunction } from "express";

// aws S3
import fileToAWS from "../libs/awsS3";

const uploadFileToServer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  return res.status(201).json(req.file);
};

const uploadFileToAWS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  const result = await fileToAWS(req.file);
  return res.status(201).json(req.file);
};

export default { uploadFileToServer, uploadFileToAWS };
