// const express = require("express");
import express from "express";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(express.json());

const port = 5555;

app.use("/api", userRouter); // /api/get-user

// app.get("/get-user", (req, res) => {
//   const user = {
//     name: "jhon",
//     email: "jhon@asdfa.com",
//     phone: "9812345678",
//     role: "user",
//   };
//   console.log(user);

//   //   res.send("I am from get request");
//   return res.send(user);
// });

app.post("/post-user", (req, res) => {
  const { username, password } = req.body;
  res.send({ username: username, password: password });
});

app.listen(port, () => {
  console.log(`Server is started at http://localhost:${port}`);
});
