const mongoose = require("mongoose");

//If first letter is capital it is class or constructor
const Schema = mongoose.Schema;

//creating a blueprint of the table
const userSchema = new Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, default: "customer"},
  },
  {timestamps: true}
);
//creating a model
const User = mongoose.model("User", userSchema);
module.exports = User;
