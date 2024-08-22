const { BlogPost, User, Category } = require('../models');
const { createPostCategory } = require('./postCategory.service');

const createPost = async (title, content, categoryIds, userId) => {
  const newPost = await BlogPost.create({
      title,
      content,
      userId,
      published: new Date(),
      updated: new Date(),
  });
  categoryIds.map((element) => createPostCategory(newPost.id, element));
  return { status: 'CREATED', data: newPost };
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', attributes: ['id', 'name'],
    }] });
  return { status: 'SUCCESSFUL', data: posts };
};

module.exports = {
createPost,
getAllPosts,
};