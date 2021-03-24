const db = require("../models");

const createPost = async (body) => {
  const post = await db.Post.create(body);
  return post;
};

const getAll = async () => {
  const posts = await db.Post.findAll({
    attributes: ["id", "title", "image", "creationDate"],
    include: { model: db.Category, attributes: ["id", "name"] },
    order: [["creationDate", "DESC"]],
  });
  return posts;
};

module.exports = {
  createPost,
  getAll,
};
