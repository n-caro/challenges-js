const db = require("../models");

const createPost = async (body) => {
  const post = await db.Post.create(body);
  return post;
};

module.exports = {
  createPost,
};
