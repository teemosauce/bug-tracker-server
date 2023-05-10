const mongoose = require("mongoose");

let UserModel = mongoose.model("bug", new mongoose.Schema({
    appid: String,
    error: String,
}))

module.exports = UserModel