const express = require('express');
const router = express.Router();

const {
    getAsignations,
    getAsignationsById,
    addAsignation,
    updateAsignationById,
    deleteAsignationById
} = require('../controllers/asignation.controller');

// Endpoint para la recuperacion de la coleccion de asignaciones
router.get('/all', getAsignations);

// Endpoint para la recuperacion de asignacion por Id
router.get('/ById/:id', getAsignationsById);

// Endpoint para añadir una asignacion
router.post('add', addAsignation);

// Endpoint para actualizar una asignacion
router.put('update/:id', updateAsignationById);

// Endpoint para borrar una asignacion
router.delete('delete/:id', deleteAsignationById);

module.exports = router;