//Import dependencies
import express, { Express } from "express";
import cors from "cors";

// Routes
import testRoute from "./routes/testRoute";
import uploadRoute from "./routes/uploadRoute";

const app: Express = express();

// Setup middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", testRoute);
app.use("/api", uploadRoute);

export default app;
