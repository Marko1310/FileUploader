import s3 from "../libs/awsS3";

import { Request, Response, NextFunction } from "express";

const getSignedUrl = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: process.env.AWS_SECRET_KEY,
    Expires: 60 * 5,
  };
  try {
    const presignedUrl = s3.getSignedUrl("getObject", params);
    res.json({ url: presignedUrl });
  } catch (err) {
    if (err) {
      return next(err);
    }
  }
};

export default getSignedUrl;
