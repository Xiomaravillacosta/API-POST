var personasModel={}


var personas = [ 
    { identificacion:1, nombre:"jhon", edad:3},
    { identificacion:2, nombre:"pedro", edad:38},
    { identificacion:3, nombre:"juan", edad:53},
    { identificacion:4, nombre:"pablo", edad:93},
    { identificacion:5, nombre:"david", edad:52},
]

personasModel.guardar = function(post, callback){
    personas.push({identificacion:post.identificacion, nombre:post.nombre, edad:post.edad})
    return callback({state:true, mensaje:"se almaceno la persona correctamente" })

}
personasModel.listar = function(post, callback){
    return callback(personas)
}

personasModel.modificar = function(post, callback){
    var posicion = personas.findIndex((item)=> item.identificacion== post.identificacion)
    if(posicion== -1){
        callback({state:false,mensaje:"esta identificacion no se encuentra dentro de la base de datos"})
    }
    else{
        personas[posicion].edad = post.edad
        personas[posicion].nombre = post.nombre
        callback({state: true,mensaje:"se actualizo el registro"})
    }

}

personasModel.eliminar = function(post,callback){

    var posicion = personas.findIndex((item)=> item.identificacion== post.identificacion)
    if(posicion== -1){
        callback({state:false, mensaje:"Esta identificacion no existe, no se puede eliminar"})
        return false
    }
    else{
        personas.splice (posicion,1)
        callback({state: true,mensaje:"Se elimino correctamente"})
    }
}

module.exports.personasModel=personasModel