const express = require('express');
const app = express();

const { 
    getAllStudent,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
} = require('./controller.student');

app.get('/', getAllStudent);

app.get('/:id', getStudentById);

app.post('/', addStudent);

app.put('/:id', updateStudent);

app.delete('/:id', deleteStudent);

module.exports = app