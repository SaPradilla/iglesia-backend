const sesionRepository = require('../repositories/sesionRepository')

const nuevoSesion = async(data)=>{
    const sesion = await sesionRepository.createSesion(data)
    return sesion

}
module.exports ={
    nuevoSesion
}