require("dotenv").config();

//aws s3
import { S3Client } from "@aws-sdk/client-s3";

import AppError from "../services/appErrorServices";

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

if (!bucketName || !region || !accessKeyId || !secretAccessKey) {
  throw new AppError(
    "Missing AWS credentials. Check your environment variables.",
    400
  );
}

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

export default s3Client;
