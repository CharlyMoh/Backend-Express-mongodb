const mongoose = require('mongoose');
const UbicationSchema = mongoose.Schema({
    building: {
        type: String,
        required: true
    },
    areaName: {
        type: String,
        required: true
    },
    departmentName: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    neighborhood: {
        type: Name,
        required: true
    },
    city: {
        type: Name,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    CP: {
        type: String,
        requried: true
    },
    country: {
        type: String,
        required: true
    }
});

const Ubication = mongoose.model('Ubication', UbicationSchema);
module.exports = Ubication;