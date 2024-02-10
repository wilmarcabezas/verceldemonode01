import express from "express";
import cors from "cors";
import studentController from './controllers/studentController.js';


const app = express();
app.use(express.json());
app.use(cors());

app.use('/students',studentController)

const port = 4000;

app.listen(port, () => {
  console.log("Servidor escuchando al puerto:" + port);
});
