var personasController ={}
var personasModel = require("../modelos/personasModel.js").personasModel

personasController.guardar = function (request,response){
    try{
        
        var post ={
            identificacion:request.body.identificacion,
            nombre:request.body.nombre,
            edad:request.body.edad,
        }
    
        if(post.nombre == undefined|| post.nombre == null|| post.nombre== ""){
                response.json({state:false,mensaje:"el campo nombre es obligatorio"})
                return false
            }
    
        if(post.edad == undefined|| post.edad == null|| post.edad== ""){
                response.json({state:false,mensaje:"el campo edad es obligatorio"})
                return false
            }
        if(post.identificacion == undefined|| post.identificacion== null|| post.identificacion== ""){
                response.json({state:false,mensaje:"el campo identificacion es obligatorio"})
                return false
            }

        personasModel.guardar( post,function(respuesta){
        response.json(respuesta)

        })
    
       } catch(error){
        response.json({state:false,mensaje:"error inesperado", error:error})
    
       }

}

personasController.listar = function(request, response){
    personasModel.listar (null, function(repuesta){
        response.json (repuesta)
    })
}

personasController.modificar = function (request,response){

    var post ={
        identificacion:request.body.identificacion,
        nombre:request.body.nombre,
        edad:request.body.edad,
    }

    if(post.nombre == undefined|| post.nombre == null|| post.nombre== ""){
        response.json({state:false,mensaje:"el campo nombre es obligatorio"})
        return false
    }

    if(post.edad == undefined|| post.edad == null|| post.edad== ""){
        response.json({state:false,mensaje:"el campo edad es obligatorio"})
        return false
    }
    if( post.identificacion == undefined|| post.identificacion== null|| post.identificacion== ""){
        response.json({state:false,mensaje:"el campo identificacion es obligatorio"})
        return false
    }


    //Bucar en  el array

    personasModel.modificar(post,function(respuesta){
        response.json(respuesta)
    })

  
    
}

personasController.eliminar = function (request,response){

    var post={
        identificacion: request.body.identificacion
    }
   
    if( post.identificacion == undefined|| post.identificacion== null|| post.identificacion== ""){
        response.json({state:false,mensaje:"el campo identificacion es obligatorio"})
        return false
    }
    personasModel.eliminar(post,function(respuesta){
        response.json(respuesta)
    })
  
}


module.exports.personasController = personasController