"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          isUrl: true,
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          notNull: true,
        },
      },
      creationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: true,
          isDate: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
