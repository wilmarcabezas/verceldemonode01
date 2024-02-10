import express from 'express';
const router = express.Router();

/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: API de Gestión de Estudiantes
 *   version: "1.0"
 * paths:
 *   /teachers:
 *     get:
 *       tags: 
 *         - Profesores
 *       summary: Obtiene los datos de los profesores
 *       description: Este endpoint retorna una lista de datos con toda la información de todos los profesores de Ibaktor.
 *       responses:
 *         200:
 *           description: Consulta ejecutadada con exito
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                    type: string
 */

router.get('/',(req,res)=>{
    res.json({message: "Lista de Profesores"});
})

router.get('/:id',(req,res)=>{
    res.json({message: "Profesor con id: " + req.params.id});
})



export default router;