import s3 from "../libs/awsS3";
import AppError from "../services/appErrorServices";
import { v4 as uuidv4 } from "uuid";

const bucketName = process.env.AWS_BUCKET_NAME;

if (!bucketName) {
  throw new AppError(
    "Missing AWS credentials. Check your environment variables.",
    400
  );
}

const fileToAWS = async function (file: Express.Multer.File) {
  const uploadParams = {
    Bucket: bucketName,
    Body: file.buffer,
    Key: file.originalname,
  };

  try {
    await s3.upload(uploadParams).promise();
  } catch (err) {
    throw new AppError("Error uploading file to AWS", 400);
  }
};

export default fileToAWS;
