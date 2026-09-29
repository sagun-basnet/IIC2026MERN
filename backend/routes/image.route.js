import express from "express";
import { uploadProfile } from "../controllers/image.js";
import upload from "../middleware/multerConfig.js";

const route = express.Router();

route.post("/profile", upload.array("image", 10), uploadProfile);

export default route;
