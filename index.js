const express = require ('express');
const app = express();
const PORT = 3001;

const users = {
    1:{
        "name": "Juan José ",
        "lastName": "Gomez Saavedra",
        "email": "juangomsaa@unisabana.edu.co",
        "id":"0000320999",
    },
    2:{
        "name": "Sergio Tomás",
        "lastName": "Agudelo Rivera",
        "email": "sergioagri@unisabana.edu.co",
        "id":"0000167400"
    }
};
app.use(express.json())

app.get('/user-info/:id',(req,res) =>{
    console.log(`Petición recibida para ID: ${req.params.id}`);
    const studentId= req.params.id;

    if ((studentId == 1) || (studentId == 2)){
        res.status(200).json(users[studentId])
    }else {
        res.status(404).send({message:"Id no válido"})   
    }
});

app.listen(PORT,()=>{
    console.log("Server running");
});