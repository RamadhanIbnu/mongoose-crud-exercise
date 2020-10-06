const Student = require ('../../models/Student');

module.exports = {
    getAllStudent: async (req, res) =>{
        const student = await Student.find({});

        try {
            res.send(student)
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getStudentById: async (req, res) =>{
        const student = await Student.findById(req.params.id);

        try {
            res.send(student);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    addStudent: async (req, res) =>{
        const student = await Student.create(req.body);

        try {
            res.send(student)
        } catch (error) {
            res.status(500).send(error);
        }
    },
    updateStudent: async (req, res) =>{
        const student = await Student.findByIdAndUpdate(req.params.id, req.body)

        try {
            await student.save();
            res.status(200).send('update success')
        } catch (error) {
            res.status(500).send(error);
        }
    },
    deleteStudent: async (req, res) =>{
        const student = await Student.findByIdAndDelete(req.params.id)

        try {
            if (student){
                res.status(200).send(`student id: ${req.params.id} has been deleted`)
            } else{
                res.status(404).send('not found')
            }
        } catch (error) {
            res.status(500).send(error)
        }
    }
}