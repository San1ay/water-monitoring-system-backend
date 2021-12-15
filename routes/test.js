import express from "express";
import testControler from "../controler/testControler.js";
const router = express.Router();

router.route("/").post(testControler.newTest);

// router.get("/:id", testControler.getTestByID);

export { router as testRoute };
