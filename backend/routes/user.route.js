import express from "express";
import {
  deleteUser,
  editUser,
  getSingleUser,
  getUser,
  postUser,
} from "../controllers/user.js";

const route = express.Router();

route.get("/get-user", getUser);
route.get("/get-single-user/:id", getSingleUser);
route.post("/post-user", postUser);
route.delete("/delete-user/:id", deleteUser);
route.put("/edit-user/:id", editUser);

export default route;
