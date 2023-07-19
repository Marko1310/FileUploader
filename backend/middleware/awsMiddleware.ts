import s3 from "../libs/awsS3";

const uploadFileToAWS = function (file: Express.Multer.File) {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.originalname,
  };

  return s3.upload(uploadParams).promise();
};

export default uploadFileToAWS;
