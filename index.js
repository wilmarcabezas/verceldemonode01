import express from "express";
import('dotenv/config');
import cors from "cors";
import controllerStudent from './controllers/controllerStudent.js';


const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.json('Genial')
});

app.use('/students',controllerStudent);

async function startServer() {
  await import('dotenv/config'); // Asegura que dotenv se carga antes de acceder a las variables de entorno
  
  const port = process.env.PORT || 3000; // Proporciona un valor por defecto para el puerto

  app.listen(port, () => {
    console.log("Servidor escuchando al puerto:" + port);
  });
}

startServer().catch(console.error);
