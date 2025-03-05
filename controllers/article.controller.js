const Article = require('../models/article.model');

// Funcion para agregar articulo
const addArticle = async (req, res) => {
    try {
        const Article = await Article.create(req.body);
        res.status(200).json(Article);
    } catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message})
    }
}

// Funcion para actualizar un articulo 
const updateArticleById = async () => {
    try {
        const {id} = req.params;
        const Article = await Article.findByIdAndUpdate (id, req.body);
        if(!Article)
            return res.status(400).json({ message: 'El articulo no existe'});
        const UpdatedArticle = await Article.find({'_id': id});
        res.status(200).json(UpdatedArticle);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrió un error' + error.message});
    }
}

// Funcion para eliminar un articulo
const deleteArticleById = async(req, res) => {
    try{
        const {id} = req.params;
        const Article = await Article.find({'_id': id});
        if (!Article)
            return res.status(400).json({message: 'El articulo no existe'});
        const Deleted = await Article.DeleteOne({'_id': id});        
    } catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message});
    }
}

// Funciones para buscar  
// Recuperar todos los articulos
const getArticles = async (req, res) => {
    try {
        const Articles = await Article.find({});
        res.status(200).json(Articles);
    } catch(error){
        res.status(500).json({ message: 'Ocurrió un error' + error.message});
    }
}

// Funcion para recueprar un articulo por ID
const getArticlesById = async (req, res) => {
    try {
        const { id } = req.params;
        const Article = await Article.find({'_id': id});
        res.status(200).json(Article);
    }catch (error) {
        res.status(500).json({message: 'Ocurrió un error' + error.message});
    }
}

module.exports = {
    addArticle,
    updateArticleById,
    deleteArticleById,
    getArticles,
    getArticlesById
}



