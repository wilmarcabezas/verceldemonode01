import express from 'express';
import studentService from '../Services/serviceStudents.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const students = await studentService.getStudents();
        res.json(students);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener estudiantes');
    }
});


router.get('/:id', async (req, res) => {
    try {
        const student = await studentService.getStudentById(req.params.id);
        if (student) {
            res.json(student);
        } else {
            res.status(404).send('Estudiante no encontrado');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener estudiante');
    }
});

router.post('/', async (req, res) => {
    try {
        await studentService.saveStudent(req.body);
        res.status(201).send('Estudiante guardado exitosamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al guardar estudiante');
    }
});

router.put('/:id', async (req, res) => {
    try {
        await studentService.updateStudent(req.params.id, req.body);
        res.send('Estudiante actualizado exitosamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al actualizar estudiante');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await studentService.deleteStudent(req.params.id);
        res.send('Estudiante eliminado exitosamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al eliminar estudiante');
    }
});


export default router;