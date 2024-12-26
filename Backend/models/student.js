// backend/models/Student.mjs

import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    grade: {
      type: String,
      required: true
    },
    age: {
      type: Number,
    },
    regNo: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model('Student', StudentSchema);

export default Student;
