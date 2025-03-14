const mongoose = required('mongoose');
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

const InventorySchema = mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    personInCharge: {
    type: String,
    required: true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

const Inventory = mongoose.model('Inventory', InventorySchema);
module.exports = Inventory;
