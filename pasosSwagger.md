# Pasos para configurar y usar Swagger en Express.js

## 1. Instalar algunos paquetes:
```terminal
    swagger-jsdoc swagger-node-express swagger-ui-express
```

## 2. Crear el archivo swagger.js e importar
```javascript
    import swaggerJSDoc from "swagger-jsdoc"; 
    import swaggerui from 'swagger-ui-express';
```
## 3. Configurar las opciones de Swagger en Express
```javascript
    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'APi Estudiantes Ibaktor',
                description: 'Api para la gestion de estudiantes',
                version: '1.0.0'
            }
        },
        apis:['.controllers/studentConstroller.js']
    }
```

## 4. Crear el objeto de especificaciones de Swagger
```javascript
    const swaggerSpec = swaggerJSDoc(options);
```

## 5. Lanzar la aplicacion de Swagger, nueva ruta
```javascript
    const swaggerDocs = (app, port)=>{
        app.use('api/documentacion',swaggerui.serve,swaggerui.setup(swaggerSpec));
    }
```  

## 6. Exportar el objeto de documentacion
```javascript
    export default swaggerDocs; 
```
## 7. Version final Swagger.js
```javascript
    import swaggerJSDoc from "swagger-jsdoc";
    import swaggerui from 'swagger-ui-express';

    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'API Estudiantes Ibaktor',
                description: 'Api para la gestion de estudiantes',
                version: '1.0.0'
            }
        },
        apis:['./controllers/studentConstroller.js']
    }

    const swaggerSpec = swaggerJSDoc(options);


    const swaggerDocs = (app, port)=>{
        app.use('/api/documentacion/',swaggerui.serve,swaggerui.setup(swaggerSpec));
    }

    export default swaggerDocs;
```

## 8. En index.js importo el objeto de Swagger
```javascript
    import swaggerDocs from './swagger.js';
```

## 9. En el listen envio la aplicacion y el puerto a SwaggerDocs
```javascript
    app.listen(port, () => {
    console.log("Servidor escuchando al puerto:" + port);
    swaggerDocs(app,port);
    });

```

## 10. Agrega los comentarios en la seccion de los endpoints para construir la documentacion
```yaml

/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: API de Gestión de Estudiantes.
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
 * 
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
 * 
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
 * 
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


```