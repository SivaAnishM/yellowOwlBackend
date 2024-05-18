import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  Name: string;
  PhoneNumber: string;
  Email: string;
  EnrollNumber: string;
  AdmissionDate: string;
  createdAt: Date;
  updatedAt: Date;
}

const StudentSchema: Schema = new Schema(
  {
    Name: { type: String, required: true },
    PhoneNumber: { type: String, required: true },
    Email: { type: String, required: true },
    EnrollNumber: { type: String, required: true },
    AdmissionDate: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IStudent>("Student", StudentSchema);
