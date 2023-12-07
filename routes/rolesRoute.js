const express = require('express')
const router = express.Router()

// Controladores
const rolController = require('../controllers/rolController')

router
    // Create
    .post('/register',rolController.Create)
    // .post('/login',usuarioController.singIn)

    // .get('/ver/:id',usuarioController.Read)
    // .get('/listar',usuarioController.ReadAll)
    // .put('/editar/:id',usuarioController.Update)

    module.exports = router