const mongoose = require('mongoose');
const {SchemaTypes} = mongoose;
const UserModel = require('../models/user_model');
const SalesSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
},{timestamps: true});

const SalesModel = new mongoose.model('SalesModel', SalesSchema);

module.exports = SalesModel;