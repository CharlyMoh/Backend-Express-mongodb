const express = require('express');
const router = express.Router();

const {
    getUbications,
    getUbicationsById,
    addUbication,
    updateUbicationById,
    deleteUbicationById,
} = require('../controllers/ubication.controller');

// Endpoint para la recuperacion de la coleccion de ubicaciones
router.get('all', getUbications);

// Endpoint para la recuperacion de una ubicacion por Id
router.get('ById/:id', getUbicationsById);

// Endpoint para añadir una ubicacion
router.post('/add', addUbication);

// Endpoint para actualizar una ubicacion
router.put('update/:id', updateUbicationById);

// Endpoint para borrar una ubicacion
router.delete('/delete/:id', deleteUbicationById);

module.exports = router;
