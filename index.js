const express = require('express');
const mongoose = require('mongoose');

// Importando librería CORS
const cors = require('cors');

// importando rutas de usuario
const userRoute = require('./routes/user.route');

// Importando rutas
const articleRoute  = require('./routes/article.route');
const personRoute = require('./routes/person.route');
const ubicationRoute = require('./routes/ubication.route');
const asignationRoute = require('./routes/asignation.route');
const inventoryRoute = require('./routes/inventory.route');

const app = express();
// Agregando el parser JSON de express
app.use(express.json());
// Agregando el middleware de CORS para consumo de APIs en el mismo origen
app.use(cors());

// Ruta por defecto
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de APIs version 1.0.0');
})

// Tareas CRUD y sus métodos
// C - Create -> post
// R - Recuperación -> get
// U - update -> put
// D - delete -> delete

// Endpoints para colección de usuarios
app.use('/api/users', userRoute);
app.use('/api/articles', articleRoute);
app.use('/api/persons', personRoute);
app.use('/api/ubications', ubicationRoute);
app.use('/api/asignations', asignationRoute);
app.use('/api/inventories', inventoryRoute);



// Realizar petición de conexión a mongodb
// mongoose.connect('mongodb://localhost:27017/MyDatabase')
mongoose.connect('mongodb+srv://2311081111:GJEvr6JZXiqlC6Cg@clusterappmovil.inadn.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAppMovil/MyDatabase')
.then( () => {
    console.log('Se estableció la conexión a base de datos exitosamente');
    app.listen( 3000, () => {
        console.log('Servidor trabajando en el puerto 3000');
    });
})
.catch( () => console.log('Ocurrió un error en la conexión a la base de datos') );