const mongoose = require('moongose');
const ArticleSchema = mongoose.Schema({
    nameArticle: {
        type: String,
        required: true
    },
    typeArticle: {
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
        type: String,
        required: true
    },
    updateDate: {
        type: Date,
        required: true
    }
});

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;