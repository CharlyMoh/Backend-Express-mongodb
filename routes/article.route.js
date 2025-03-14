const express = require('express');
const router = express.Router();

const {
    addArticle,
    updateArticleById,
    deleteArticleById,
    getArticles,
    getArticlesById

} = require('../controllers/article.controller');

// Endpoint para la recuperacion de la coleccion de articulos
router.get('/all', getArticles );

// Endpoint para la receperacion de un articulo
router.get('/ById/:id', getArticlesById);

// Endpoint para la añadir un articulo
router.post('/add', addArticle);

// Endpoint para actualizar un producto
router.put('/update/:id', updateArticleById);

// Endpoint para eliminar un articulo
router.delete('/delete/:id', deleteArticleById);

module.exports = router;
