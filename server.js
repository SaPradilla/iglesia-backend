const express = require('express')
const cors = require('cors');    
const Routes = require('./routes')
require('dotenv').config()
const app = express();

// Puerto
const Port = process.env.PORT
// Cors
app.use(cors());

app.listen(Port,function(){
    console.log(`Te has conectado a http://localhost:${Port}`) 
})
// BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.use('/api',Routes)