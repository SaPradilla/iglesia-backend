const Response = require('../adapters/http/response')
const temploService = require('../services/temploService')

const Create = async(req,res)=>{
    const templo = req.body
    try {
     
        const temploNuevo = await temploService.nuevoTemplo(templo)

        Response.successResponseWithData(res,'Templo Creado con Exito',temploNuevo)
        
    } catch (error) {
        Response.ErrorResponse(res,'Hubo un error al crear un templo',error)
    }
    
}

const Read = async(req,res)=>{
    const {id} = req.params
    try {
        const Templo = await temploService.verTemplo(id)
        Response.successResponseWithData(res,'Templo Visualizado con Exito',Templo)

    } catch (error) {
        Response.ErrorResponse(res,'Hubo un error al visualizar el templo',error)
        
    }
}

const ReadAll = async(req,res)=>{

    try {

        const Templos = await temploService.listarTemplos()
        
        Response.successResponseWithData(res,'Templos Listado con Exito',Templos)


    } catch (error) {
        Response.ErrorResponse(res,'Hubo un error al listar los templos',error)
        
    }

}

const Update = async(req,res)=>{
    const {id} = req.params
    const temploData = req.body

    try {
        await temploService.editarTemplo(id,temploData)
        Response.successResponse(res,'Templo Editado con Exito')
        
    } catch (error) {
        Response.ErrorResponse(res,'Hubo un error al editar el templo',error)
        
    }

}

module.exports = {Create,Read,ReadAll,Update}