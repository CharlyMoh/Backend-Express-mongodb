const Inventory = require('../models/inventory.model');

// Funcion para agregar una ubicación
const addInventory = async (req, res) => {
    try {
        const Inventory = await Inventory.create(req.body);
        res.status(200).json(Inventory);
    } catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message})
    }
}

// Funcion para actualizar inventario 
const updateInventoryById = async () => {
    try {
        const {id} = req.params;
        const Inventory = await Inventory.findByIdAndUpdate (id, req.body);
        if(!Inventory)
            return res.status(400).json({ message: 'El inventario no existe'});
        const UpdatedInventory = await Inventory.find({'_id': id});
        res.status(200).json(UpdatedInventory);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error' + error.message});
    }
}



// Funcion para eliminar un inventario
const deleteInventoryById = async(req, res) => {
    try{
        const {id} = req.params;
        const Inventory = await Inventory.find({'_id': id});
        if (!Inventory)
            return res.status(400).json({message: 'El inventario no existe'});
        const DeletedInventory = await Inventory.DeleteOne({'_id': id});        
    } catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message});
    }
}

// Funciones para buscar  
// Recuperar todos los inventarios
const getInventories = async (req, res) => {
    try {
        const Inventories = await Inventory.find({});
        res.status(200).json(Inventories);
    } catch(error){
        res.status(500).json({ message: 'Ocurrió un error' + error.message});
    }
}

// Funcion para recueprar un articulo por ID
const getInventoriesById = async (req, res) => {
    try {
        const { id } = req.params;
        const Inventory = await Inventory.find({'_id': id});
        res.status(200).json(Inventory);
    }catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message});
    }
}

module.exports = {
    addInventory,
    updateInventoryById,
    deleteInventoryById,
    getInventories,
    getInventoriesById
}