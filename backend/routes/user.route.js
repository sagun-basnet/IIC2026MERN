import express from "express";
import { getUser, postUser } from "../controllers/user.js";

const route = express.Router();

route.get("/get-user", getUser);
route.post("/post-user", postUser);

export default route;
