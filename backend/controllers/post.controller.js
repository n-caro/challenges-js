const { PostService } = require("../services");

const createPost = async (req, res) => {
  try {
    const { body } = req;
    const post = await PostService.createPost(body);
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const posts = await PostService.getAll();
    return res.json({ posts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createPost, getAll };
