import express from "express";
import {
  createStudent,
  updateStudent,
  deleteStudent,
  getAllStudents,
} from "../controllers/studentController";

const studentRoutes = express.Router();

studentRoutes.post("/create", createStudent);
studentRoutes.delete("/delete/:id", deleteStudent);
studentRoutes.post("/update", updateStudent);
studentRoutes.get("/fetchAll", getAllStudents);

export { studentRoutes };
