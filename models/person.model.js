const mongoose = require('mongoose');
const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    secondName:{
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required : true
    },
    posittion: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true 
    },
    landline: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    }
});

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;