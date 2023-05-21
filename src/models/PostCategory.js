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
          as: 'categories',
          through: PostCategory,
          otherKey: 'categoryId',
        });
        models.Category.belongsToMany(models.BlogPost, {
          foreignKey: 'categoryId',
          as: 'blogPost',
          through: PostCategory,
          otherKey: 'postId',
        });
    };
    return PostCategory;
  };