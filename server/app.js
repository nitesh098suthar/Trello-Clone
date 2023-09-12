import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middleware/errorMiddleware.js";
import taskRouter from "./routes/taskRoutes.js";
import authRouter from "./routes/authRouter.js";

export const app = express();
dotenv.config({ path: "./config/.env" });

const corsOptions = {
  origin: true,
  methods: "GET,PUT,POST,DELETE",
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/api/v1/task", taskRouter);
app.use("/api/v1/auth", authRouter);
app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.status(200).json({ msg: "server is up!", PORT: process.env.PORT, success: true });
});
