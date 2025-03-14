const mongoose = require('mongoose');
const AsignationSchema2 = mongoose.Schema({
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

const AsignationSchema = mongoose.Schema({
    person: {
        type: String,
        requried: true
    },
    article: {
        type: String,
        required: true
    },
    observation: {
        type: String,
        reqired: true
    },
    status: {
        type: Boolean,
        required: true
    },
    assignmentStartDate: {
        type: Date,
        required: true
    },
    assignmentEndDate : {
        type: Date,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    registration: {
        type: Date,
        default: Date.now
    }
});

const Asignation = mongoose.model('Asignation', AsignationSchema);
module.exports = Asignation;