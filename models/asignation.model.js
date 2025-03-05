const mongoose = require('mongoose');
const AsignationSchema = mongoose.Schema({
    personId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        requried: true
    },
    articleID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
        required: true
    },
    observation: {
        type: String,
        reqired: true
    },
    state: {
        type: Boolean,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    personIdTask: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    }
});

const AsignationSchema2 = mongoose.Schema({
    personId: {
        type: Number,
        requried: true
    },
    articleID: {
        type: Number,
        required: true
    },
    observation: {
        type: String,
        reqired: true
    },
    state: {
        type: Boolean,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    personIdTask: {
        type: Number,
        required: true
    }
});

const Asignation = mongoose.model('Asignation', AsignationSchema);
module.exports = Asignation;