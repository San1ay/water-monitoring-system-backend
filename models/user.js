import mongoose from "mongoose";
import testSchema from "./tests.js";
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    userID: String,
    Name: {
      firstName: {
        type: String,
        default: "User",
      },
      lastName: String,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    location: {
      type: String,
    },
    tests: [testSchema],
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
