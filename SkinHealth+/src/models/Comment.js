const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postId: String,
  userId: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
