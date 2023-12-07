const {sesion} = require('../models')
const {sesion_roles} = require('../models')
const {roles} = require('../models')
const {user_roles} = require('../models')

const createSesion = async(data)=>{
    const nuevoSesion = await sesion.create(data)
    return nuevoSesion
}

module.exports={
    createSesion
}