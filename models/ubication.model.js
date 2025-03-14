const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    number: {
        type: String, 
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    country: {
        type: String, 
        required: true
    }
});

const UbicationSchema = mongoose.Schema({
    building: {
        type: String,
        required: true
    },
    areaName: {
        type: String,
        required: true
    },
    addres: {
        type: AddressSchema,
        required: true
    },
    departmentName: {
        type: String,
        required: true
    },
    registration: {
        type: Date,
        default: Date.now
    },
});

const Ubication = mongoose.model('Ubication', UbicationSchema);
module.exports = Ubication;