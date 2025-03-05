const express = require('express');
const router = express.Router();

const {
    getPerson,
    getPersonById,
    addPerson,
    updatePersonById,
    deletePersonById,
} = require('../controllers/person.controller');

// Endpoint para la recuperacion de la coleccion de personas
router.get('/all', getPerson);

// Endpoint para la recuperacion de una persona por Id
router.get('ById/:id', getPersonById);

// Endpoint para añadir una persona
router.post('add', addPerson);

// Endpoint para actualizar una persona
router.put('/update/:id', updatePersonById);

// Endpoint para borrar una persona
router.delete('/delete/:id', deletePersonById);

module.exports = router;