//Import dependencies
import express, { Express } from "express";
import cors from "cors";

// Routes
import testRoute from "./routes/testRoute";
import uploadRoute from "./routes/uploadRoute";
import presignedUrl from "./routes/presignedUrl";

// controllers
import globalErrorHandler from "./controllers/errorController";

const app: Express = express();

// Setup middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", testRoute);
app.use("/api", uploadRoute);
app.use("/api", presignedUrl);

//Global error handler
app.use(globalErrorHandler);

export default app;
