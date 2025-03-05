const Ubication = require('../models/ubication.model');

// Funcion para agregar una ubicación
const addUbication = async (req, res) => {
    try {
        const ubication = await ubication.create(req.body);
        res.status(200).json(Article);
    } catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message})
    }
}

// Funcion para actualizar una ubicación 
const updateUbicationById = async () => {
    try {
        const {id} = req.params;
        const Ubication = await Article.findByIdAndUpdate (id, req.body);
        if(!Ubication)
            return res.status(400).json({ message: 'La ubucación no existe'});
        const UpdatedUbication = await Ubication.find({'_id': id});
        res.status(200).json(UpdatedUbication);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error' + error.message});
    }
}

// Funcion para eliminar un articulo
const deleteUbicationById = async(req, res) => {
    try{
        const {id} = req.params;
        const Ubication = await Ubication.find({'_id': id});
        if (!Ubication)
            return res.status(400).json({message: 'La ubicación no existe'});
        const Deleted = await Ubication.DeleteOne({'_id': id});        
    } catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message});
    }
}

// Funciones para buscar  
// Recuperar todas las ubicaciones
const getUbications = async (req, res) => {
    try {
        const Ubications = await Ubication.find({});
        res.status(200).json(Ubications);
    } catch(error){
        res.status(500).json({ message: 'Ocurrió un error' + error.message});
    }
}

// Funcion para recueprar una ubicación por ID
const getUbicationsById = async (req, res) => {
    try {
        const { id } = req.params;
        const Ubication = await Ubication.find({'_id': id});
        res.status(200).json(Ubication);
    }catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message});
    }
}

module.exports = {
    addUbication,
    updateUbicationById,
    deleteUbicationById,
    getUbications,
    getUbicationsById
}