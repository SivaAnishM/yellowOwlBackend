import { Request, Response } from "express";
import Student, { IStudent } from "../models/Student";

// Create a new student
const createStudent = async (req: any, res: any) => {
  try {
    console.log(req.body);
    const newStudent = new Student(req.body);
    const student = await newStudent.save();
    res.status(201).json(student);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a student
const deleteStudent = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    console.log(id); // This should log the ID
    const data = await Student.findByIdAndRemove(id);
    res.status(200).json({ message: "Student deleted" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// Update a student
const updateStudent = async (req: any, res: any) => {
  try {
    const student = await Student.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    res.status(200).json(student);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch all students
const getAllStudents = async (req: any, res: any) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export { createStudent, updateStudent, deleteStudent, getAllStudents };
