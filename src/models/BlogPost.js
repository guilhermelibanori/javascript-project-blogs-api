const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostsTable = sequelize.define('BlogPost',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
      userId: DataTypes.INTEGER,
    },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    }
  );

  BlogPostsTable.associate = (models) => {
    BlogPostsTable.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return BlogPostsTable;
};

module.exports = BlogPostSchema;
