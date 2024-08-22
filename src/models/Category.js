const CategorySchema = (sequelize, DataTypes) => {
  const CategoriesTable = sequelize.define('Category', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  });

  return CategoriesTable;
};

module.exports = CategorySchema;
