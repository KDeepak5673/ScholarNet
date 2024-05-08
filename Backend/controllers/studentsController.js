// backend/controllers/studentsController.mjs

import Student from '../models/student.js';

// Controller function to create a new student
export const createStudent = async (req, res) => {
  try {
    const { name, grade, age } = req.body;

    // Create new student
    const newStudent = new Student({ name, grade, age });

    // Save student to database
    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Controller function to get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Controller function to get a single student by ID
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ msg: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Controller function to update a student by ID
export const updateStudent = async (req, res) => {
  try {
    const { name, grade, age } = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { name, grade, age }, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ msg: 'Student not found' });
    }
    res.json(updatedStudent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Controller function to delete a student by ID
export const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndRemove(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ msg: 'Student not found' });
    }
    res.json({ msg: 'Student deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
