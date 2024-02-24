import express from "express";
import('dotenv/config');
import cors from "cors";
import conectar from './Utils/Database.js';

import controllerStudent from './controllers/controllerStudent.js';


const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.json('Genial')
});

app.use('/students',controllerStudent);

const port = process.env.PORT || 3000; // Proporciona un valor por defecto para el puerto

  app.listen(port, () => {
    conectar();
    console.log("Servidor escuchando al puerto:" + port);
  });
