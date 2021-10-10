const mongoose = require("mongoose");

//If first letter is capital it is class or constructor
const Schema = mongoose.Schema;

//creating a blueprint of the table
const menuSchema = new Schema({
  name: {type: String, required: true},
  image: {type: String, required: true},
  price: {type: Number, required: true},
  size: {type: String, required: true},
});

//creating a model
const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
