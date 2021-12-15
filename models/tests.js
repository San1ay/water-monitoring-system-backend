import mongoose from "mongoose";
const Schema = mongoose.Schema;
const testSchema = new Schema(
  {
    sampleData: {
      name: String,
      temp: { type: Number, required: true },
      tempScale: {
        type: String,
        default: "°C",
      },
      waterLevel: { type: Number, required: true },
      turbidity: { type: Number, required: true },
      phValue: { type: Number, required: true, min: 0, max: 14 },
    },
    calculatedResult: {
      wqi: Number,
      rating: String,
      confidence: Number,
      season: String,
      quality: String,
    },
  },
  { timestamps: true }
);
// const Test = mongoose.model("Test", testSchema);
export default testSchema;
