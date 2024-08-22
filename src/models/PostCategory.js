const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoriesTable = sequelize.define('PostCategory',
    {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    }
  );

  PostCategoriesTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: 'PostCategory',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });

    models.Category.belongsToMany(models.BlogPost, {
      through: 'PostCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'blog_posts',
    });
  };

  return PostCategoriesTable;
};

module.exports = PostCategorySchema;
