// Express Router
import { Request, Response, NextFunction } from "express";

const uploadFile = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  return res.status(201).json(req.file);
};

export default { uploadFile };
