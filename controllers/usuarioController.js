const Response = require('../adapters/http/response')
const usuarioService = require('../services/usuarioService')

const singUp = async(req,res)=>{
    let usuarioData = req.body
    try {
        const nuevoUsuario = await usuarioService.singUp(usuarioData)

        Response.successResponseWithData(res,'Usuario Registrado con Exito',nuevoUsuario)


    } catch (error) {
        Response.ErrorResponse(res,'Hubo un error al registrar usuario',error)
        
    }
}

const singIn = async(req,res)=>{
    const {documento,contrasena} = req.body
    try {
    
        const token = await usuarioService.singIn(documento,contrasena)

        res.header('auth-token', token).json({
            msg: 'Inicio de sesión exitoso.',
            data: { token }
        });

    } catch (error) {
        Response.ErrorResponse(res,'Hubo un error al loguear',error)
        
    }
}

const Read = async(req,res)=>{
    const {id} = req.params
    try {
        const Usuario = await usuarioService.Read(id)
        Response.successResponseWithData(res,'Usuario Visualizado con Exito',Usuario)

    } catch (error) {
        Response.ErrorResponse(res,'Hubo un error al visualizar el usuario',error)
        
    }
}
const ReadAll = async(req,res)=>{
    try {
        const Usuario = await usuarioService.ReadAll()
        Response.successResponseWithData(res,'Usuarios Visualizados con Exito',Usuario)

    } catch (error) {
        Response.ErrorResponse(res,'Hubo un error al visualizar los usuarios',error)
        
    }
}
const Update = async(req,res)=>{
    const {id} = req.params
    const usuarioData = req.body
    try {
        await usuarioService.Update(id,usuarioData)
        Response.successResponse(res,'Usuario Editado con Exito')

    } catch (error) {
        Response.ErrorResponse(res,'Hubo un error al visualizar los usuarios',error)
    }
}
module.exports={
    singUp,
    singIn,
    Read,
    ReadAll,
    Update
}