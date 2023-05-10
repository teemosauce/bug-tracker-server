const mongoose = require("mongoose");

let UserModel = mongoose.model("user", new mongoose.Schema({
    username: String,
    password: String,
}))

module.exports = UserModel