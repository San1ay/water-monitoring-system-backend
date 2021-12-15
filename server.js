import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRoute } from "./routes/user.js";
import { testRoute } from "./routes/test.js";
import { mongodbURI, port, allowedOrigin as origin } from "./configVariables.js";
const app = express();
app.use(
  cors({
    origin,
    methods: "GET, POST",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRoute);
app.use("/test", testRoute);

mongoose
  .connect(mongodbURI)
  .then((result) => {
    console.log("Connected to database");
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("App Started on " + port);
});
