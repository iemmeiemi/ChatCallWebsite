import express from "express";
import userRoutes from "./userRoutes.js";
import authRoutes from "./authRoutes.js";

const routes = express.Router();

routes.use("/user", userRoutes);
routes.use("/auth", authRoutes);

export default routes;
