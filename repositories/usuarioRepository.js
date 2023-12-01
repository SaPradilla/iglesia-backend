const {usuario} = require('../models')


const RegisterUsuario = async(usuarioData) =>{
    const nuevoUsuario = await usuario.create(usuarioData)
    return nuevoUsuario
}

const ReadIdUsuario = async(id)=>{
    const Usuario = await usuario.findOne({
        where:{ 
            id:id
        }
    })
    return Usuario
}
const ReadDocumentUsuario = async(documento)=>{
    const Usuario = await usuario.findOne({
        where:{
            documento:documento
        }
    })
    return Usuario

}

const ReadAllUsuario = async()=>{
    const Usuario = await usuario.findAll()
    return Usuario
}

const UpdateUsuario = async(id,usuarioData)=>{
    const editUsuario = await usuario.update(usuarioData,{
        where:{
            id:id
        }
    })
    return editUsuario
}

module.exports={
    RegisterUsuario,
    ReadAllUsuario,
    UpdateUsuario,
    ReadIdUsuario,
    ReadDocumentUsuario
    
}