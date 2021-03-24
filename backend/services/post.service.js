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

const deletePost = async (id) => {
  const query = { id };
  return db.Post.destroy({ where: query });
};

const update = async (id, fieldsToUpdate) => {
  const query = { id };
  const post = await getById(id);
  if (!post) {
    throw new Error("Post does not exist.");
  }
  const update = await db.Post.update(fieldsToUpdate, { where: { id } });
  const isUpdated = update == 1;
  if (!isUpdated) {
    throw new Error("Operation could not be updated.");
  }
  return true;
};

module.exports = {
  createPost,
  getAll,
  getById,
  deletePost,
  update,
};