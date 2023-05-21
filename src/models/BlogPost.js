module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
      'BlogPost',
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        title: {
          type: DataTypes.STRING,
        },
        content: {
          type: DataTypes.STRING,
        },
        userId: {
          type: DataTypes.STRING,
          foreignKey: true,
        },
        published: {
          type: DataTypes.STRING,
          defaultValue:DataTypes.NOW,
        },
        updated: {
          type: DataTypes.STRING,
          defaultValue:DataTypes.NOW,
        },
      },
      {
        tableName: 'blogpost',
        timestamps: false,
        underscored: true,
      });

      BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'postId',
            as: 'categories',
        });
      };
    return BlogPost;
  };

//   BlogPost.associate = (models) => {
//     BlogPost.belongsTo(models.User,
//     {   foreignKey:'userId',
//         as:'blogPosts'});
//   };