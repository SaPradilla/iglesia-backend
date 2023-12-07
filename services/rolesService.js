const rolesRepository = require('../repositories/rolesRepository')

const nuevoRol = async(data)=>{
    const rol = await rolesRepository.createRoles(data)
    return rol
}
module.exports ={
    nuevoRol
}