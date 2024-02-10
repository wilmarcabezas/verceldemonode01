import express from 'express';
const router = express.Router();

const data = [
    { id: 40, name: "Claudia Lopez", age: 20, note: 4.5 },
    { id: 20, name: "Andrea", age: 18, note: 8 },
    { id: 30, name: "Antonio", age: 21, note: 9 },
    { id: 10, name: "Baltazar", age: 22, note: 10 },
    { id: 50, name: "Wilmar", age: 100, note: 9.5 },
    { id: 60, name: "Nico", age: 15, note: 9.5 },
];


router.get("/", (req, res) => {
    res.send(data);
});

router.get("/:id", (req, res) => {

    const studentFilter = data.filter(student => student.id == req.params.id);
    if (studentFilter.length > 0) {
        return res.send(studentFilter);
    }
    return res.status(200).send({ data: 'El Id ' + req.params.id + ' de Estudiante no ha sido encontrado' });

});

router.delete('/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const index = (data.findIndex(student => student.id == studentId));

    if (index >= 0) {
        data.splice(index, 1);
        return res.status(200).send({ message: '!Estudiante eliminado' });
    }

    return res.status(404).send({ message: 'El Id ' + req.params.id + ' de Estudiante no ha sido encontrado' });
})

router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const { age } = req.body;

    const student = data.find(item => item.id === id);
    if (student) {
        student.name = name;
        student.age = age;
        return res.send({ message: 'Proceso realizado', data: student })
    }
    else {
        return res.status(404).send({ data: 'El Id ' + req.params.id + ' de Estudiante no ha sido encontrado' });
    }

})

export default router;