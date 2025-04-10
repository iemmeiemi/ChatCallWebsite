import express from "express";
import cors from "cors";
import routes from "./src/route/index.js";
import { connectDB } from "./src/config/dbConnect.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

connectDB();

export default app;
