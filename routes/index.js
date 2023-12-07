const { Router } = require("express");
const router = Router()

// Rutas
const Templos = require('./templosRoutes')
const Usuario = require('./usuarioRoutes')
const Sesion = require('./sesionRoute')
const Roles = require('./rolesRoute')
// Orquestador
const Routes = [
    {
        path:'/templos',
        controller:Templos
    },
        {
        path:'/usuarios',
        controller:Usuario
    },
    {
        path:'/roles',
        controller:Roles
    },
    ,
    {
        path:'/sesiones',
        controller:Sesion
    }
]

//En rutador
Routes.forEach( (route) =>{
    router.use(route.path, route.controller)
})
module.exports = router

module.exports= router