const Response = require('../adapters/http/response')
const rolService = require('../services/rolesService')

const Create = async(req,res)=>{
    const rol = req.body
    try {
     
        // const temploNuevo = await temploService.nuevoTemplo(templo)
        const nuevoRol = await rolService.nuevoRol(rol)

        Response.successResponseWithData(res,'Rol Creado con Exito',nuevoRol)
        
    } catch (error) {
        Response.ErrorResponse(res,'Hubo un error al crear un rol',error)
    }
    
}

module.exports={
    Create
}