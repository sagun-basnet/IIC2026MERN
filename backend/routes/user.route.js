import express from "express";
import { getUser } from "../controllers/user.js";

const route = express.Router();

route.get("/get-user", getUser);

export default route;
