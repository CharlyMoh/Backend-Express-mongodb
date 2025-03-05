const Asignation = require('../models/asignation.model');

// Funcion para agregar una asignación
const addAsignation = async (req, res) => {
    try {
        const Asignation = await Asignation.create(req.body);
        res.status(200).json(Asignation);
    } catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message})
    }
}

// Funcion para actualizar una asignación 
const updateAsignationById = async () => {
    try {
        const {id} = req.params;
        const Asignation = await Asignation.findByIdAndUpdate (id, req.body);
        if(!Article)
            return res.status(400).json({ message: 'La asignación no existe'});
        const UpdatedAsignation = await Asignation.find({'_id': id});
        res.status(200).json(UpdatedAsignation);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error' + error.message});
    }
}

// Funcion para eliminar un articulo
const deleteAsignationById = async(req, res) => {
    try{
        const {id} = req.params;
        const Asignation = await Asignation.find({'_id': id});
        if (!Article)
            return res.status(400).json({message: 'La asignación no existe'});
        const Deleted = await Asignation.DeleteOne({'_id': id});        
    } catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message});
    }
}

// Funciones para buscar las asignaciones
// Recuperar todas las asignaciones
const getAsignations = async (req, res) => {
    try {
        const Asignations = await Asignation.find({});
        res.status(200).json(Asignations);
    } catch(error){
        res.status(500).json({ message: 'Ocurrió un error' + error.message});
    }
}

// Funcion para recueprar una asignación por ID
const getAsignationsById = async (req, res) => {
    try {
        const { id } = req.params;
        const Asignation = await Asignation.find({'_id': id});
        res.status(200).json(Asignation);
    }catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message});
    }
}

module.exports = {
    addAsignation,
    updateAsignationById,
    deleteAsignationById,
    getAsignations,
    getAsignationsById
}