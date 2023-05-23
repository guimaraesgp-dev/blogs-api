module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      categoryId: {
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'posts_category',
      timestamps: false,
      underscored: true,
    });

    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'postId',
        through: PostCategory,
        otherKey: 'categoryId',
        //as:'categories',
      });
      models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'categoryId',
        through: PostCategory,
        otherKey: 'postId',
        as:'blogPosts',
      });
  };
  return PostCategory;
};