// const express = require("express");
import express from "express";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());

const port = 5555;

app.use("/api", userRouter); // /api/get-user
app.use("/auth", authRouter); // /api/get-user

app.listen(port, () => {
  console.log(`Server is started at http://localhost:${port}`);
});
