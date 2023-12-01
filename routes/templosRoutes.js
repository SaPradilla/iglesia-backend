const express = require('express')
const router = express.Router()

// Controladores
const TemploController = require('../controllers/temploControllers.js')

router
    // Create
    .post('/register',TemploController.Create)
    .get('/ver/:id',TemploController.Read)
    .get('/listar',TemploController.ReadAll)
    .put('/editar/:id',TemploController.Update)

    module.exports = router