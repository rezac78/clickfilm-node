const mongoose = require('mongoose');
const { schema } = require('./service/userValidation');

const Userschema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 255,
    },
    creactAt: {
        type: Date,
        default: Date.now
    }
})

Userschema.statics.userValidation = function (body) {
    return schema.validate(body , {abortEarly: false})
}

module.exports = mongoose.model('User', Userschema);