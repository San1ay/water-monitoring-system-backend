import express from "express";
import userControler from "../controler/userControler.js";
const router = express.Router();

router.route("/register").post(userControler.registerUser);

router.get("/:userID", userControler.getUserByID);

export { router as userRoute };
