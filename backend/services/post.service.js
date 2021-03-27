const postRepository = require("../repositories/post.repository");

const createPost = async (body) => {
  const post = await postRepository.create(body);
  return post;
};

const getAll = async () => {
  const posts = await postRepository.getAll();
  return posts;
};

const getById = async (id) => {
  return await postRepository.getById(id);
};

const deletePost = async (id) => {
  return postRepository.deletePost(id);
};

const update = async (id, fieldsToUpdate) => {
  const post = await postRepository.getById(id);
  if (!post) {
    throw new Error("Post does not exist.");
  }
  const update = await postRepository.update(id, fieldsToUpdate);
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
