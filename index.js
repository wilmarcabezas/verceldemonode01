import express from 'express';

const app = express();
const port = 3000;
const data = [
    {id:1, name:'Claudia'},
    {id:2, name:'Andrea'},
    {id:3, name: 'Antonio'},
    {id:4, name:'Baltazar'}
]

app.get('/student',(req,res)=>{
    res.send(data);
})





app.listen(port,()=>{
    console.log('Servidor escuchado  en el puerto: '+port)
})