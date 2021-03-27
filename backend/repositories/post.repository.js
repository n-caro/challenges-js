const db = require("../models");

const create = async (post) => {
  return await db.Post.create(post);
};

const getById = async (id) => {
  return await db.Post.findOne({
    where: { id },
    attributes: ["id", "title", "body", "image", "creationDate"],
    include: { model: db.Category, attributes: ["id", "name"] },
  });
};

const getAll = async () => {
  return await db.Post.findAll({
    attributes: ["id", "title", "image", "creationDate"],
    include: { model: db.Category, attributes: ["id", "name"] },
    order: [["creationDate", "DESC"]],
  });
};

const update = async (id, fieldsToUpdate) => {
  return await db.Post.update(fieldsToUpdate, { where: { id } });
};

const deletePost = async (id) => {
  return await db.Post.destroy({ where: { id } });
};

module.exports = {
  create,
  getById,
  getAll,
  update,
  deletePost,
};
