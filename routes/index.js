const { Router } = require("express");
const router = Router()

// Rutas
const Templos = require('./templosRoutes')
const Usuario = require('./usuarioRoutes')
// Orquestador
const Routes = [
    {
        path:'/templos',
        controller:Templos
    },
        {
        path:'/usuarios',
        controller:Usuario
    }
]

//En rutador
Routes.forEach( (route) =>{
    router.use(route.path, route.controller)
})
module.exports = router

module.exports= router