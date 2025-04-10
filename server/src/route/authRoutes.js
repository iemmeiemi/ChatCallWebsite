import express from "express";

const authRoutes = express.Router();

authRoutes.get("/", (req, res) => {
  res.send("hello world");
});

export default authRoutes;
