module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
    categoryId: { 
      type: DataTypes.INTEGER, 
      foreignKey: true, 
    },
    postId: { 
      type: DataTypes.INTEGER, 
      foreignKey: true },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      as: 'Categories',
      otherKey: 'categoryId',
      through: PostCategory,
    });
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      as: 'posts',
      otherKey: 'postId',
      through: PostCategory,
    });
  };
  return PostCategory;
}
