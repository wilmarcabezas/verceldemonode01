//Indico que voy a importar express en mi proyecto
import express from 'express';

//Creo mi servidor llamado app
const app = express()

//Puerto que escucha el servidor (Mi servidor es app)
const port = 3000

const data = [
    {
        id: 1,
        nombre: 'Conejito Triste',
        imagen: 'https://media.istockphoto.com/id/1437800161/es/foto/adorable-conejito-holland-lop-que-se-queda-en-c%C3%A9sped-verde-artificial-con-fondo-verde-verde.jpg?s=612x612&w=0&k=20&c=JQi1hLH2LsWSRi_gCHpLYA9A5M6QkCY3IvFYSXR4P10='
    },
    {
        id: 2,
        nombre: 'Conejita Coqueta',
        imagen: 'https://images.squarespace-cdn.com/content/v1/57a2aeb1ff7c509ef76566c9/f9187225-cb7d-48c4-988a-407857a5ac83/image-asset.jpeg'
    }
]


//Al servidor (app) le agrego el metodo GET en la raiz (/), utiliza dos parametros (request, response)
//El primero "escucha las peticiones" y el segundo "devuelve datos"
//Por ejemplo: el res.send  envia un mensaje al cliente (quien hace la peticion)
app.get('/', (req, res) => {
    res.send('Hola, bienvenidos al Backend')
})

app.get('/students', (req, res) => {
    res.send('Consulta de estudiantes')
})

app.get('/animals', (req, res) => {
    res.send(data);
})

//Servidor escucha por el puerto (port=3000) y luego muestra un mensaje para indicar que estas activo
app.listen(port, () => { console.log(`Servidor escuchando por el puerto... ${port}`) })