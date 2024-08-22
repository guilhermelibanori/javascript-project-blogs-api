const UserSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: 'users',
      underscored: true,
      timestamps: false,
    }
  );

  UsersTable.associate = (models) => {
    UsersTable.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'blogPosts',
    });
  };

  return UsersTable;
};

module.exports = UserSchema;
