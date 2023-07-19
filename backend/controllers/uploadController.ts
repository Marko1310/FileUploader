// Express Router
import { Request, Response, NextFunction } from "express";

const uploadFile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(req.file);
  } catch (err) {
    return next(err);
  }
};

export default { uploadFile };
