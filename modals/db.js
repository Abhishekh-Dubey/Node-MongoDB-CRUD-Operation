const mongoose = require("mongoose");
const puserSchema = new mongoose.Schema({
  _id: Number,

  name: {
    type: String,
    required: true,
  },
  ctype: String,
  video: Number,
});
module.exports = new mongoose.model("User", puserSchema);
