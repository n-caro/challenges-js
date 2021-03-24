const { PostService } = require("../services");

const createPost = async (req, res) => {
  try {
    const { body } = req;
    const post = await PostService.createPost(body);
    return res.status(201).json(post);
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

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostService.getById(id);
    if (!post) {
      return res.status(404).json({ error: `Post not found.` });
    }
    return res.json({ post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostService.deletePost(id);
    if (!post) {
      return res.status(404).json({ error: `Post not found.` });
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const postUpdated = await PostService.update(id, body);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createPost, getAll, getById, deletePost, updatePost };
