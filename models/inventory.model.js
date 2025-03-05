const mongoose = required('mongoose');
const InventorySchema = mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    date: {
        type: Date,
        required: true
    },
    personInCharge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true
    },
    registrationDate: {
        type: Date,
        required: true
    },
    state: {
        type: Boolean,
        required: true
    }
});

const InventorySchema2 = mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    date: {
        type: Date,
        required: true
    },
    personInCharge: {
    type: Number,
    required: true
    },
    registrationDate: {
        type: Date,
        required: true
    },
    state: {
        type: Boolean,
        required: true
    }
});

const Inventory = mongoose.model('Inventory', InventorySchema);
module.exports = Inventory;
