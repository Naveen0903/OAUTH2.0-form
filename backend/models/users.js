const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

const { MONGO_URL,
        MONGO_OPTIONS } = require("../config");

mongoose.connect(MONGO_URL, MONGO_OPTIONS);

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, index: true, unique: true},
    password: {type: String, required: true}
});

userSchema.plugin(timestamps);
module.exports = {
    user: mongoose.model("user", userSchema)
}