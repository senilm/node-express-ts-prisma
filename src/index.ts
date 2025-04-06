// Load environment variables early
import "./lib/env.js";

// External dependencies
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

// Internal modules
import { requestLogger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import logger from "./lib/logger.js";
import userRoutes from "./routes/user.routes.js";

// App Initialization
const app = express();

// Global Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(requestLogger);


// Health Check Route
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

// API Routes
app.use("/api/users", userRoutes);


// Error handler -> (should be after all routes to catch errors thrown from controllers)
app.use(errorHandler);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`🚀 Server running at http://localhost:${PORT}`);
});
