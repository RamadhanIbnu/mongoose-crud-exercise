const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    class:{
        type:String,
    }
});

const Student = mongoose.model('students', studentSchema);
module.exports = Student;