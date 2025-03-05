const Person = require('../models/person.model');

// Funcion para agregar persona
const addPerson = async (req, res) => {
    try {
        const Person = await Person.create(req.body);
        res.status(200).json(Person);
    } catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message})
    }
}

// Funcion para actualizar una persona 
const updatePersonById = async () => {
    try {
        const {id} = req.params;
        const Person = await Article.findByIdAndUpdate (id, req.body);
        if(!Article)
            return res.status(400).json({ message: 'No se encontró la persona'});
        const UpdatedPerson = await Person.find({'_id': id});
        res.status(200).json(UpdatedPerson);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error' + error.message});
    }
}

// Funcion para eliminar un articulo
const deletePersonById = async(req, res) => {
    try{
        const {id} = req.params;
        const Person = await Person.find({'_id': id});
        if (!Person)
            return res.status(400).json({message: 'No se encontró la persona'});
        const Deleted = await Person.DeleteOne({'_id': id});        
    } catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message});
    }
}

// Funciones para buscar  
// Recuperar todas las personas
const getPerson = async (req, res) => {
    try {
        const Persons = await Person.find({});
        res.status(200).json(Persons);
    } catch(error){
        res.status(500).json({ message: 'Ocurrió un error' + error.message});
    }
}

// Funcion para recuperar una persona por ID
const getPersonById = async (req, res) => {
    try {
        const { id } = req.params;
        const Person = await Person.find({'_id': id});
        res.status(200).json(Person);
    }catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message});
    }
}

module.exports = {
    addPerson,
    updatePersonById,
    deletePersonById,
    getPerson,
    getPersonById
}
