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

const getById = async (id) => {
  const query = { id };
  return await db.Post.findOne({
    where: query,
    attributes: ["id", "title", "body", "image", "creationDate"],
    include: { model: db.Category, attributes: ["id", "name"] },
  });
};

module.exports = {
  createPost,
  getAll,
  getById,
};
