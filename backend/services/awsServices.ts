import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "../libs/awsS3";
import AppError from "../services/appErrorServices";
import { Upload } from "@aws-sdk/lib-storage";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

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

  const uploader = new Upload({
    client: s3Client,
    params: uploadParams,
  });

  return await uploader.done();
};

const presignedUrl = async () => {
  console.log("HERE");
  const command = new PutObjectCommand({
    Bucket: "mcabo",
    Key: "test.jpeg",
  });
  return getSignedUrl(s3Client, command, {
    expiresIn: 6000,
  });
};

export default { fileToAWS, presignedUrl };
