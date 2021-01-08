'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Page1Data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Page1Data.init({
    select_id1: DataTypes.INTEGER,
    select_id2: DataTypes.INTEGER,
    select_id3: DataTypes.INTEGER,
    select_id4: DataTypes.INTEGER,
    text_id3: DataTypes.STRING,
    text_id4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Page1Data',
  });
  return Page1Data;
};