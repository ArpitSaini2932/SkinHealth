const express = require("express");
const Comment = require("../models/Comment");

const router = express.Router();

// Get comments for a post
router.get("/:postId", async (req, res) => {
  const comments = await Comment.find({ postId: req.params.postId }).sort({ createdAt: 1 });
  res.json(comments);
});

// Add a comment
router.post("/", async (req, res) => {
  const { postId, userId, content } = req.body;
  const comment = new Comment({ postId, userId, content });
  await comment.save();
  res.json({ message: "Comment added!" });
});

module.exports = router;
