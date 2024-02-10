import swaggerJSDoc from "swagger-jsdoc";
import swaggerui from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Universidad Ibaktor',
            description: 'Api para la gestion de datos academicos, permite los metodos GET, POST, PUT, DELETE. ',
            version: '2.0.0'
        }
    },
    apis:['./controllers/studentController.js','./controllers/teachersController.js']
}

const swaggerSpec = swaggerJSDoc(options);


const swaggerDocs = (app, port)=>{
    app.use('/api/doc/',swaggerui.serve,swaggerui.setup(swaggerSpec));
}

export default swaggerDocs;