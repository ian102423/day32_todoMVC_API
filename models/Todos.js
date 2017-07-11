var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todos = new Schema({
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model("todos", todos);
