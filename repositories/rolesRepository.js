const {roles} = require('../models')

const createRoles = async(data)=>{
    const nuevoRoles = await roles.create(data)
    return nuevoRoles
}

const readAllRoles = async()=>{
    const Roles = await roles.findAll()
    return Roles
}

module.exports = {
    readAllRoles,
    createRoles
}