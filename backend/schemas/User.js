const { default: mongoose } = require('mongoose');
const mognoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mognoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    // Passport-local-mongoose defines username and password by itself.
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema)

module.exports = {User};