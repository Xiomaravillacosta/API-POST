var personasController = require("./api/controladores/personasController.js").personasController


app.post("/personas/guardar", function(request, response){
    personasController.guardar(request, response) 
})

 app.post("/personas/listar", function(request, response){
    personasController.listar(request, response) 
 })
 

 app.post("/personas/modificar", function(request, response){  
    personasController.modificar(request, response)  
 })


 app.post("/personas/eliminar", function (request, response){
    personasController.eliminar(request, response)  
 })