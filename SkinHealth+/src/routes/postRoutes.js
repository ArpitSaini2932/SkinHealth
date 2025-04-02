const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

// Create a new post
router.post("/", async (req, res) => {
  const { userId, title, content } = req.body;
  const post = new Post({ userId, title, content });
  await post.save();
  res.json({ message: "Post created!" });
});

// Like a post
router.put("/:id/like", async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } });
  res.json({ message: "Post liked!" });
});

module.exports = router;
