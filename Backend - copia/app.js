var express = require("express")
global.app = express()
var puerto = 3000;

//metodos
//POST - ENVIA INFORMACION  (POST PUEDE HACER TODO LO DEMÁS)
//GET - TRAER INFORMAION
//PUT - ACTUALIZAR INFORMACIO
//DELETE - BORRAR INFORMACION


// MVC   MODELO VISTA CONTROLADOR

//api

var bodyParser = require ("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require("./routes.js")

//api modificar UPDATE
//api eliminar DELETE

app.listen(puerto, function(){
    console.log("Servidor fucionando por el puerto" + puerto)
})