import { Request } from "express";

import multer from "multer";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) {
    const filename = file.originalname;
    cb(null, filename);
  },
});

const storeFileLocally = multer({ storage });

const attachFileToReq = multer({ storage: multer.memoryStorage() });

export default { storeFileLocally, attachFileToReq };
