const {Schema} = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const UsersSchema = new Schema({
    email: String
})

UsersSchema.plugin(passportLocalMongoose);

module.exports = {UsersSchema}