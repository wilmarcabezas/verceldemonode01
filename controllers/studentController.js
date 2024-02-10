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

/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: API de Gestión de Estudiantes
 *   version: "1.0"
 * paths:
 *   /students:
 *     get:
 *       tags: 
 *         - Estudiantes
 *       summary: Obtiene los datos de los estudiantes
 *       description: Este endpoint retorna una lista de datos con toda la información de todos los estudiantes de Ibaktor.
 *       responses:
 *         200:
 *           description: Una lista de datos
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: El ID del dato
 *                       example: 40
 *                     name:
 *                       type: string
 *                       description: El nombre asociado al dato
 *                       example: Claudia Lopez
 *                     age:
 *                       type: integer
 *                       description: La edad asociada al dato
 *                       example: 20
 *                     note:
 *                       type: number
 *                       format: float
 *                       description: La nota asociada al dato
 *                       example: 4.5
 *     post:
 *       tags: 
 *         - Estudiantes
 *       summary: Crea un nuevo estudiante
 *       description: Este endpoint crea un nuevo estudiante con los datos proporcionados y lo añade a la lista de estudiantes.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - id
 *                 - name
 *                 - age
 *                 - note
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID del estudiante
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: Nombre del estudiante
 *                   example: "Claudia Lopez"
 *                 age:
 *                   type: integer
 *                   description: Edad del estudiante
 *                   example: 20
 *                 note:
 *                   type: number
 *                   format: float
 *                   description: Nota del estudiante
 *                   example: 4.5
 *       responses:
 *         200:
 *           description: Estudiante creado con éxito
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Mensaje de confirmación de la creación
 *                     example: "Estudiante creado con éxito"
 *                   data:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/Student'
 *   /students/{id}:
 *     get:
 *       tags: 
 *         - Estudiantes
 *       summary: Obtiene un estudiante por ID
 *       description: Este endpoint retorna un estudiante específico basado en el ID proporcionado.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID del estudiante a buscar.
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: Estudiante encontrado
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Student'
 *         404:
 *           description: Estudiante no encontrado
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   data:
 *                     type: string
 *                     description: Mensaje de error
 *                     example: "El Id 40 de Estudiante no ha sido encontrado"
 *     delete:
 *       tags: 
 *         - Estudiantes
 *       summary: Elimina un estudiante por ID
 *       description: Este endpoint elimina un estudiante específico basado en el ID proporcionado.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID del estudiante a eliminar.
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: Estudiante eliminado con éxito
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Mensaje de confirmación de eliminación
 *                     example: "!Estudiante eliminado"
 *         404:
 *           description: Estudiante no encontrado
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Mensaje de error indicando que el estudiante no fue encontrado
 *                     example: "El Id 40 de Estudiante no ha sido encontrado"
 *     put:
 *      tags:
 *        - Estudiantes
 *      
 * 
 *     patch:
 *       tags: 
 *         - Estudiantes
 *       summary: Actualiza la información de un estudiante por ID
 *       description: Este endpoint actualiza la información de un estudiante específico basado en el ID proporcionado. Actualmente, permite actualizar el nombre y la edad del estudiante.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID del estudiante a actualizar.
 *           schema:
 *             type: integer
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Nuevo nombre del estudiante
 *                   example: "Claudia Lopez"
 *                 age:
 *                   type: integer
 *                   description: Nueva edad del estudiante
 *                   example: 21
 *       responses:
 *         200:
 *           description: Información del estudiante actualizada con éxito
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Mensaje indicando que el proceso se realizó con éxito
 *                     example: "Proceso realizado"
 *                   data:
 *                     $ref: '#/components/schemas/Student'
 *         404:
 *           description: Estudiante no encontrado
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   data:
 *                     type: string
 *                     description: Mensaje de error indicando que el estudiante no fue encontrado
 *                     example: "El Id 40 de Estudiante no ha sido encontrado"
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: El ID del estudiante
 *         name:
 *           type: string
 *           description: Nombre del estudiante
 *         age:
 *           type: integer
 *           description: Edad del estudiante
 *         note:
 *           type: number
 *           format: float
 *           description: Nota del estudiante
 */


router.get("/", (req, res) => {
    res.status(200).send(data);
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

router.put('/',(req,res)=>{
    res.status(200).send({ message: 'PUT'});
})

router.post('/',(req,res)=>{
    const {id,name,age,note} = req.body;
    data.push({id,name,age,note});
    return res.send({message:'Estudiante creado con éxito',data});
})
export default router;