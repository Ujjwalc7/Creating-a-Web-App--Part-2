const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    }
}, {timestamps:true});

const UserModel = mongoose.model('UserModel',schema);

module.exports = UserModel;