const { PostCategory } = require('../models');

const createPostCategory = async (postId, categoryId) => {
  const newPostCategory = await PostCategory.create({
      postId,
      categoryId,
  });
  return { status: 'CREATED', data: newPostCategory };
};

module.exports = {
createPostCategory,
};