const usuarioRepository = require('../repositories/usuarioRepository')
const {cryptPassword,comparePassword} = require('../middleware/auth')
const jwt = require('jsonwebtoken')

const singUp = async(usuarioData) =>{

    usuarioData.contrasena = await cryptPassword(usuarioData.contrasena)
    console.log(usuarioData)
    const Usuario = await usuarioRepository.RegisterUsuario(usuarioData)
    
    return Usuario
}

const singIn = async(documento,contrasena) =>{

    const UsuarioFind = await usuarioRepository.ReadDocumentUsuario(documento)
    if(!UsuarioFind){

        const error = new Error('Documento no Registrado')
        error.code = "404"
        throw error;
    }

    const password_compared = await comparePassword(contrasena, UsuarioFind.contrasena);

    if (!password_compared) {

        const error = new Error('Credenciales Incorrectas')
        error.code = "401"
        throw error;
    }
    const user = { ...UsuarioFind.dataValues };

    delete user.contrasena;
    delete user.edad;
    delete user.tipo_documento;
    delete user.documento;
    delete user.createdAt;
    delete user.updatedAt;
    
    console.log(user)
    const token = jwt.sign(
        { user }, process.env.TOKEN_KEY, { expiresIn: "1h", }
    )
    
    return token

}

const Read = async(id)=>{
    const usuarioFind = await usuarioRepository.ReadIdUsuario(id)
    if(!usuarioFind){
        const error = new Error('No se encontro el usuario')
        error.code = "404"
        throw error;
    }
    return usuarioFind

}

const ReadAll = async()=>{
    const usuariosFind = await usuarioRepository.ReadAllUsuario()
    if(!usuariosFind){
        const error = new Error('No se encontraron usuarios')
        error.code = "404"
        throw error;
    }
    return usuariosFind

}

const Update = async(id,usuarioData)=>{
    const usuarioFind = await usuarioRepository.ReadIdUsuario(id)
    if(!usuarioFind){
        const error = new Error('No se encontro el usuario, no se pudo editar')
        error.code = "404"
        throw error;
    }

    await usuarioRepository.UpdateUsuario(id,usuarioData)

}

module.exports={singUp,singIn,Read,ReadAll,Update}