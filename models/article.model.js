const mongoose = require('moongose');
const ArticleSchema = mongoose.Schema({
    nameArticle: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    ubication: {
        type: Number,
        required: true
    },
    registration: {
        type: Date,
        default: Date.now
    }
});

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;