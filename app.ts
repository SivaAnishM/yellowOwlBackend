import express from "express";
import { studentRoutes } from "./Src/routes/studentRoutes";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());
app.use("/students", studentRoutes);

mongoose.set("strictQuery", true);

mongoose
  .connect(
    "mongodb+srv://sivaanish399:aCaLhFiUYDisl3G5@cluster0.8djtiwu.mongodb.net/Student",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as Parameters<typeof mongoose.connect>[1]
  ) // Type assertion
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
