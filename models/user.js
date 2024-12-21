const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        user_name: {
            type: String,
            required: true
        },

        email: {
            type:   String,
            required:true,
            unique: true,
            match:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        },

        password: {
            type: String,
            required: true,
            minlength: 6,
        }
    }, { timestamps: true});

const User = mongoose.model('User', userSchema)

module.exports = User;