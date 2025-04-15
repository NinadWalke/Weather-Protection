const { default: mongoose } = require('mongoose');
const mognoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mognoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      dob: {
        type: Date,
        required: true
      },
      gender: {
        type: String,
        required: true
      }
    // Passport-local-mongoose defines username and password by itself.
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema)

module.exports = {User};