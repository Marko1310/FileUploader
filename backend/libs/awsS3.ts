require("dotenv").config();

//aws s3
import S3 from "aws-sdk/clients/s3";

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

if (!bucketName || !region || !accessKeyId || !secretAccessKey) {
  throw new Error("Missing AWS credentials. Check your environment variables.");
}

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const fileToAWS = function (file: Express.Multer.File) {
  const uploadParams = {
    Bucket: bucketName,
    Body: file.buffer,
    Key: file.originalname,
  };

  return s3.upload(uploadParams).promise();
};

export default fileToAWS;
