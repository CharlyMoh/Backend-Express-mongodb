const mongoose = require('mongoose');
const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required : true
    },
    posittion: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true 
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    registration: {
        type: Date,
        required: Date.now
    }
});

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;