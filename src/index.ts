import "./lib/env.js"
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { requestLogger } from "./middleware/logger.js";
import logger from "./lib/logger.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(requestLogger);

// Routes
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, _next: Function) => {
  logger.error(`Unhandled error: ${err.message}`);
  res.status(500).json({ message: "Something went wrong" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
