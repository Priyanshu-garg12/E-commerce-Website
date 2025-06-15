const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    mobile: {type: Number, required: true},
    products: {type: Array, default: []},
})

const Usermodel = new mongoose.model('User', userSchema);

module.exports = Usermodel;
