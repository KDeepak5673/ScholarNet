// backend/routes/students.js

import express from 'express';
import authMiddleware from '../middlewares/auth.js'; // Import authentication middleware
import { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent } from '../controllers/studentsController.js'; // Import student controller functions

const router = express.Router();

// Add a new student (protected route)
router.post('/', authMiddleware, createStudent);

// Get all students (public route)
router.get('/', getAllStudents);

// Get a single student by ID (public route)
router.get('/:id', getStudentById);

// Update a student by ID (protected route)
router.put('/:id', authMiddleware, updateStudent);

// Delete a student by ID (protected route)
router.delete('/:id', authMiddleware, deleteStudent);

export default router;