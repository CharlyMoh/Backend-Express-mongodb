const express = require('express');
const router = express.Router();

const {
    getInventories,
    getInventoriesById,
    addInventory,
    updateInventoryById,
    deleteInventoryById
} = require('../controllers/inventory.controller');

// Endpoint para la recuperacion de la coleccion de inventorios
router.get('/all', getInventories);

// Endpoint para la recuperacion de un inventario por Id
router.get('ById/:id', getInventoriesById);

// Endpoint para añadir un inventario
router.post('/add', addInventory);

// Endpoint para actualizar un inventario
router.put('update/:id', updateInventoryById);

// Endpoint para eliminar un inventario
router.delete('delete/:id', deleteInventoryById);

module.exports = router;