var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name : String,
    password : String
})

exports.user = mongoose.model('users',UserSchema);